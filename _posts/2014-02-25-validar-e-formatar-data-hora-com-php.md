---
layout: post
title: Validar e formatar data/hora com PHP
date: 2014-02-25 11:40:11.000000000 -03:00
permalink: /php/validar-e-formatar-data-hora-com-php/
categories:
- PHP
tags:
- colaboração
- open-source
- PHP
- validação
---
Depois de um tempo resolvi atualizar alguns dos meus <strong>snippets</strong>, um que muitos programadores quando vão trabalhar com data e hora no PHP não tem uma solução definitiva que realmente funcione e atenda a todas as suas necessidades. Não vou entrar muito em detalhe sobre como cada função funciona, para isso temos o book do [PHP][php].

Este é um método bem pequeno e simples para se compreendido, nele você informa em que padrão esta a sua data e ele faz a validação para você.<br>
{% gist RodolfoSilva/9207125 %}

Com este método não precisamos ficar dando milhões de explode e implode para fazer a formatação da data, com algumas funções nativas do PHP 5 isso ficou muito mais fácil veja.<br>
{% gist RodolfoSilva/9207358 %}


Estas duas funções são compatíveis com o __PHP 5 &gt;= 5.3__

Deixem seu comentário e aceito dicas para melhorias destes métodos.

[php]: http://php.net
