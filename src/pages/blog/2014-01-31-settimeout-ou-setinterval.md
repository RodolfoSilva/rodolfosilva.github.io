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

```javascript{numberLines: true}
// Executa o evento a cada 10 segundos
setInterval(() => console.log('setInterval'), 10000);
// Executa o evento depois de 5 segundos
setTimeout(() => console.log('setTimeout'), 5000);
```

## Exemplo

JavaScript:
```javascript{numberLines: true}
const $watch = document.querySelector("#relogio")
const $timeout = document.querySelector("#delay")

const showCurrentTime = () => {
 const date = new Date()
 $watch.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

setTimeout(() => {
   $timeout.innerHTML = `setTimeout foi executado com sucesso.`;
}, 5000);

setInterval(showCurrentTime, 1000);
```

HTML:
```javascript{numberLines: true}
<div id="relogio">Aguardando o setInterval ser Executado</div>
<div id="delay">Aguardando o setTimeout ser Executado</div>
```

Este código irá exibir a hora atual, atualizando a cada 1 segundo e após alguns segundos irá alterar o conteúdo do segundo elemento que está na tela. Para atualizar o relógio utilizamos o `setInterval()` que vai ser executado a cada 1 segundo exibindo a hora atual. O `setTimeout()` irá executar apenas uma vez depois de 5 segundos modificando a mensagem que está dentro do segundo elemento.

## Então qual utilizar?

O indicado é utilizar o `setInterval()` sempre que você queria que uma determinada função seja executada entre invervalos de tempo. E utilizar o `setTimeout()` quando você quiser executar um método depois de um determinado tempo.
