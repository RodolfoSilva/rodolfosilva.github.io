---
layout: post
title: Resetar senha do MySQL
date: 2014-04-25 16:38:19.000000000 -03:00
slug: utilitarios/resetar-senha-do-mysql/
keywords: resetar senha mysql, recuperar senha mysql, trocar senha mysql, perdi a senha do mysql
categories:
- Utilitários
tags:
- banco de dados
- mysql
- sql
---

Para resetar a senha do **MySQL** você deve encerrar a o processo
`mysqld`. No linux utilize o comando:

`sudo /etc/init.d/mysqld stop`<br>
ou<br>
`sudo service mysql stop`

Após ter finalizado o processo execute o comando:

`sudo mysqld_safe --skip-grant-tables &`

Quando finalizar a inicialização do **MySQL**, insira o comando:

`sudo mysql`

Já logado no **MySQL**, digite:

`use mysql;`

Agora vamos resetar a senha:

`UPDATE mysql.user SET Password=PASSWORD('NOVA SENHA') WHERE User='root';`

Agora atualize os privilegios, digite:

`flush privileges;`

Agora saia do **MySQL** e reiniciar o serviço, utilize os comandos abaixo:

`\q`<br>
`sudo /etc/init.d/mysqld restart;`
