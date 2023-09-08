---
layout: post
title: Automating Fly.io database Backups with GitHub Actions
date: 2013-09-08 18:00:00.000000000 -03:00
slug: github-actions/automating-flyio-database-backups-with-github-actions/
categories:
  - Tools
tags:
  - github
  - github-actions
  - tools
  - elixir
  - fly.io
---

GitHub Actions allows us to automate, customize, and execute software development workflows directly in our repositories. In this guide, I'll explore how to set up a workflow that will automatically backup a database hosted on Fly.io. Depending on your preferences, these backups can be saved either to a specified S3 bucket or as a GitHub artifact.

## Prerequisites

Before start, ensure you have the following:

- A GitHub repository to house the workflow, preferably private.
- A database hosted on Fly.io that you'd like to backup.
- Optionally, an S3 bucket if you choose to save backups there.

## Setting Up the Workflow

Inside your GitHub repository, navigate to the `.github/workflows` directory (create it if it doesn't exist), then create a new YAML file called `backup-fly-db.yml`.
Copy and paste the following YAML content into your newly created `backup-fly-db.yml` file:

```yml
name: Backup database

on:
  workflow_dispatch:
  schedule:
    - cron: '0 */12 * * *'

env:
  PG_VERSION: 15
  STORAGE_PROVIDER: ${{ secrets.STORAGE_PROVIDER || 'github' }}
  S3_REGION: ${{ secrets.S3_REGION || 'nyc3' }}

jobs:
  backup-db:
    name: Backup DB
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Generate backup filename
        id: filename
        run: |
          CURRENT_DATE=$(date +"%Y-%m-%d_%H-%M-%S")
          echo "filename=backup_${CURRENT_DATE}.gz" >> "$GITHUB_OUTPUT"
      - name: Setup Fly.io CLI
        uses: superfly/flyctl-actions/setup-flyctl@master
      - name: Install PostgreSQL client
        run: |
          sudo apt-get remove --purge postgresql-client-* -y
          echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
          wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
          sudo apt-get update
          sudo apt-get install -y postgresql-client-${{ env.PG_VERSION }}
      - name: Start Fly.io database proxy
        env:
          FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
        run: |
          flyctl proxy 5432:5432 -a ${{ secrets.FLY_APP_NAME }} &
      - name: Backup database
        run: |
          pg_dump "postgres://${{ secrets.PG_USERNAME }}:${{ secrets.PG_PASSWORD }}@localhost:5432/${{ secrets.PG_DATABASE }}" | gzip > ${{ steps.filename.outputs.filename }}
      - name: Upload compressed backup as GitHub artifact
        if: ${{ env.STORAGE_PROVIDER == 'github' }}
        uses: actions/upload-artifact@v2
        with:
          name: ${{ steps.filename.outputs.filename }}
          path: ${{ steps.filename.outputs.filename }}
      - name: Set up S3cmd cli tool
        if: ${{ env.STORAGE_PROVIDER != 'github' }}
        uses: s3-actions/s3cmd@v1.5.0
        with:
          provider: ${{ env.STORAGE_PROVIDER }}
          region: ${{ env.S3_REGION }}
          access_key: ${{ secrets.S3_ACCESS_KEY }}
          secret_key: ${{ secrets.S3_SECRET_ACCESS_KEY }}
      - name: Upload compressed backup to S3
        run: | 
          s3cmd put ${{ steps.filename.outputs.filename }} s3://${{ secrets.S3_BUCKET_NAME }}/
```

## Add Secrets to your Repository

Owr workflow uses several secrets to securely interact with Fly.io and the database. Navigate to your repository's main page, then to 'Settings' -> 'Secrets abd variables' -> 'Actions' to add each secret.

| Secret           | Required | Description                                          |
| ---------------- | :------: | ---------------------------------------------------- |
| FLY_API_TOKEN    |    ✅    | Fly.io API token                                     |
| FLY_APP_NAME     |    ✅    | Fly.io database app name                             |
| PG_USERNAME      |    ✅    | Postgres username                                    |
| PG_PASSWORD      |    ✅    | Postgres password                                    |
| PG_DATABASE      |    ✅    | Postgres database name to backup                     |
| STORAGE_PROVIDER |    ✅    | Storage provider to use (github, digitialocean, aws) |

### Only if you are using a external storage like S3

| Secret               | Required | Description    |
| -------------------- | :------: | -------------- |
| S3_ACCESS_KEY        |    ✅    | S3 access key  |
| S3_SECRET_ACCESS_KEY |    ✅    | S3 secret key  |
| S3_BUCKET_NAME       |    ✅    | S3 bucket name |
| S3_REGION            |          | S3 region      |

## Running the Workflow

With the secrets set up, the workflow can be triggered:

- Manually, via the `workflow_dispatch` event.
- Automatically every 12 hours using the cron schedule `'0 */12 * * *'`.

On execution, the workflow will:

- Initiate a proxy to your Fly.io database.
- Backup the database as a gzip file.
- Store the backup as a GitHub artifact or in the specified S3 bucket.

## Why Use Timeout?

The `timeout-minutes: 30` setting in the workflow limits a job's maximum runtime. If exceeded, the job terminates. This is particularly useful for private repositories where extended actions might incur extra costs. Setting a timeout ensures cost predictability.

Set the `timeout-minutes` with a slight buffer beyond the job's typical completion time, but avoid setting it too generously to ensure efficiency.

## Additional Notes

- To modify backup frequency, adjust the cron schedule.
- By default, backups are saved as GitHub artifacts. For S3 storage, supply the required secrets.

## Conclusion

Automating database backups is essential for data integrity and recovery. With GitHub Actions and Fly.io, you can easily set up a reliable backup mechanism. Always test your backup process and periodically check the health of stored backups. The inclusion of strategic settings like `timeout-minutes` ensures your workflow runs efficiently and predictably. Happy coding!
