---
layout: post
title: Diferença entre setTimeout e setInterval
date: 2014-01-31 11:47:02.000000000 -03:00
permalink: /javascript/settimeout-ou-setinterval
categories:
- JavaScript
tags:
- colaboração
- javascript
- tutorial
---
Com o __JavaScript__ podemos executar um determinado código de tempos em tempos. Em outras palavras é possível criar eventos. Existem duas funções que são utilizados para a criação destes eventos, o `setTimeout()` e `setInterval()`. A diferença entres estas duas funções esta no comportamento. A função __setTimeout__ é executada apenas uma unica vez após um delay e o __setInterval__ é executada em intervalos de tempo indefinidamente.<br>
{% gist RodolfoSilva/9049274 %}

## Exemplo das funções executando.

JavaScript:<br>
{% gist RodolfoSilva/9049257 %}
HTML:<br>
{% gist RodolfoSilva/9049315 %}

Este código atualiza dois campos em um intervalo de tempo determinado, para atualizar o primeiro campo é utilizado a função `setInterval()` para atualizar a hora atual. E o segundo utiliza a função `setTimeout()` para alterar a mensagem uma unica vez após um determinado tempo.

## Então qual utilizar?

Depende muito do que esta sendo implementado, no caso de um método onde ele deve ser executado independente do evento ter sido realizado com sucesso ou não, neste caso utilizaríamos o `setInterval()`. Já se estivéssemos criando um sistema que dependesse do resultado de outra função e tivesse um daly utilizaríamos o `setTimeout()`.
