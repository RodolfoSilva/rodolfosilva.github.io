---
layout: post
title: Diferença entre setTimeout e setInterval
date: 2014-01-31 11:47:02.000000000 -03:00
slug: javascript/settimeout-ou-setinterval/
categories:
- JavaScript
tags:
- colaboração
- javascript
- tutorial
---
Utilizando __JavaScript__ podemos executar uma determinada função de tempos em tempos. Em outras palavras é possível criar eventos que serão executados dentro do intervalo definido. Existem duas funções que são utilizados para a criação destes eventos que são: o `setTimeout()` e `setInterval()`. A diferença entres estas duas funções esta no comportamento. A função __setTimeout__ é executada apenas uma unica vez após um determinado tempo, e o __setInterval__ é executada em intervalos de tempo indefinidamente.<br>
{% gist RodolfoSilva/9049274 %}

## Exemplo

JavaScript:<br>
{% gist RodolfoSilva/9049257 %}
HTML:<br>
{% gist RodolfoSilva/9049315 %}

Este código irá exibir a hora atual, atualizando a cada 1 segundo e após alguns segundos irá alterar o conteúdo do segundo elemento que está na tela. Para atualizar o relógio utilizamos o `setInterval()` que vai ser executado a cada 1 segundo exibindo a hora atual. O `setTimeout()` irá executar apenas uma vez depois de 5 segundos modificando a mensagem que está dentro do segundo elemento.

## Então qual utilizar?

O indicado é utilizar o `setInterval()` sempre que você queria que uma determinada função seja executada entre invervalos de tempo. E utilizar o `setTimeout()` quando você quiser executar um método depois de um determinado tempo.
