---
layout: post
title: Resetar senha do MySQL
date: 2014-04-25 16:38:19.000000000 -03:00
permalink: /utilitarios/resetar-senha-do-mysql
categories:
- Utilitários
tags:
- banco de dados
- mysql
- sql
---

Para resetar a sua senha do **MySQL** primeiramente você deve encerrar a
execução usando o comando:

`sudo /etc/init.d/mysqld stop`<br>
ou<br>
`sudo service mysql stop`

Após ter parado execute a seguinte linha de comando:

`sudo mysqld_safe --skip-grant-tables &`

Agora que iniciou o **MySQL**, digite:

`sudo mysql`

Já logado no **MySQL**, digite:

`use mysql;`

Agora vamos resetar a senha:

`UPDATE mysql.user SET Password=PASSWORD('NOVA SENHA') WHERE User='root';`

Agora atualize os privilegios, digite:

`flush privileges;`

E agora pode sair do **MySQL** e reiniciar o serviço:

`\q`<br>
`sudo /etc/init.d/mysqld restart;`
