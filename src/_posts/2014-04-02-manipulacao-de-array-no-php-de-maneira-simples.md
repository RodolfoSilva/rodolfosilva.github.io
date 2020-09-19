---
layout: post
title: Manipulação de array no PHP de maneira simples
date: 2014-04-02 22:30:49.000000000 -03:00
slug: php/manipulacao-de-array-no-php-de-maneira-simples/
keywords: array php, cakephp hash, busca em array, ordernar array
categories:
  - GitHub
  - OpenSource
  - PHP
tags:
  - array
  - colaboração
  - CakePHP
  - github
  - open-source
  - PHP
  - snippet
---

Muitos já devem ter ouvido falar do **[CakePHP][cakephp_hash]** e talvez da
class **Hash** que vem junto com o pacote de bibliotecas do **framework**.
Aqui no trabalho utilizamos o **[CakePHP][cakephp_hash]** para desenvolver algumas
aplicações. Utilizamos bastante a _class_ **Hash** para manipularmos os
_arrays_ porém não é sempre que eu utilizo o **[CakePHP][cakephp_hash]** 
para desenvolver meus projetos, então resolvi extrair a class **Hash** do
**[CakePHP][cakephp_hash]** e adaptar ela pra rodar sem dependências de
qualquer biblioteca do **[CakePHP][cakephp_hash]**.

Como a class **Hash** foi originalmente desenvolvida pela comunidade do
**[CakePHP][cakephp_hash]** no site deles você pode encontrar toda a
documentação e exemplos de implementação da [class Hash][class hash].

Coloquei o código da _class_ que eu modifiquei em minha página
do **[GitHub][github_hash]** junto com o código segue a mesma documentação que
você pode encontrar no site do **[CakePHP][cakephp_hash]**. Para utilizar
essa _class_ você importala no projeto e seguir a orientação da
documentação do **[CakePHP][cakephp_hash]**.

**[GitHub][my_github]**: [github.com/RodolfoSilva/Hash][github_hash]

Deixe o seu comentário abaixo com a sua opinião sobre este pequeno artigo.

[my_github]: https://github.com/RodolfoSilva/ 'Rodolfo Silva'
[github_hash]: https://github.com/RodolfoSilva/Hash 'Class Hash'
[cakephp_hash]: http://cakephp.org/ 'Hash do CakePHP'
[class hash]: http://book.cakephp.org/2.0/en/core-utility-libraries/hash.html 'Hash do CakePHP'
