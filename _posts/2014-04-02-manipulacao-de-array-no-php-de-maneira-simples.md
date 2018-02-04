---
layout: post
title: Manipulação de array no PHP de maneira simples
date: 2014-04-02 22:30:49.000000000 -03:00
permalink: /php/manipulacao-de-array-no-php-de-maneira-simples/
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

Muitos já devem ter ouvido falar do **[CakePHP][CakePHP_Hash]** e talvez da
class **Hash** que vem junto com o pacote de bibliotecas do **framework**.
Aqui no trabalho utilizamos o **[CakePHP][CakePHP_Hash]** para desenvolver algumas
aplicações. Utilizamos bastante a _class_ **Hash** para manipularmos os
_arrays_ porém não é sempre que eu utilizo o **[CakePHP][CakePHP_Hash]** 
para desenvolver meus projetos, então resolvi extrair a class **Hash** do 
**[CakePHP][CakePHP_Hash]** e adaptar ela pra rodar sem dependências de 
qualquer biblioteca do **[CakePHP][CakePHP_Hash]**.

Como a class **Hash** foi originalmente desenvolvida pela comunidade do
**[CakePHP][CakePHP_Hash]** no site deles você pode encontrar toda a
documentação e exemplos de implementação da [class Hash][class Hash].

Coloquei o código da _class_ que eu modifiquei em minha página
do **[GitHub][GitHub_Hash]** junto com o código segue a mesma documentação que
você pode encontrar no site do **[CakePHP][CakePHP_Hash]**. Para utilizar
essa _class_ você importala no projeto e seguir a orientação da
documentação do **[CakePHP][CakePHP_Hash]**.

**[GitHub][my_GitHub]**: [github.com/{{ site.github_username }}/Hash][GitHub_Hash]

Deixe o seu comentário abaixo com a sua opinião sobre este pequeno artigo.

[my_GitHub]: https://github.com/{{ site.github_username }}/ "Rodolfo Silva"
[GitHub_Hash]: https://github.com/{{ site.github_username }}/Hash "Class Hash"
[CakePHP_Hash]: http://cakephp.org/ "Hash do CakePHP"
[class Hash]: http://book.cakephp.org/2.0/en/core-utility-libraries/hash.html "Hash do CakePHP"
