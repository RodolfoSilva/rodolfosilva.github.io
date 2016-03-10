---
layout: post
title: Escrevendo módulos JavaScript compatíveis com o Browser, AMD e Node.js
date: 2014-05-07 09:54:42.000000000 -03:00
permalink: /javascript/escrevendo-modulos-javascript-compativeis-com-o-browser-amd-e-node-js/
categories:
- GitHub
- JavaScript
- OpenSource
- Utilitários
tags:
- colaboração
- dicas
- github
- javascript
- snippet
---

Eu recentemente comecei a criar um módulo para agendar a execução de eventos e
imediatamente fiquei me confrontado com a questão da reutilização de código
entre o cliente e o servidor. Este módulo chamado **[Schedulejs][Schedulejs]**
que eu desenvolvi utilizando algumas técnicas simples pode ser utilizado pelo
cliente e pelo servidor. Neste pequeno artigo vou explicar um pouco como
escrever módulos cujo código pode ser facilmente reutilizados no navegador
e Node.js.

Então vamos supor que queremos desenvolver um módulo com um objeto
**Utilitários** que é composto por funções uteis para criação de uma
aplicação ou um novo módulo. Se fossemos criá-lo apenas para ser executado
pelo Node.js criaríamos um arquivo chamado "`utilitarios.js`" com o seguinte
conteúdo:

{% gist RodolfoSilva/387dcba96b8a85cbd9e2 %}

E depois acessaríamos este módulo utilizando a função `require()`:

{% gist RodolfoSilva/682849ae6a11dcb68913 %}

Para usá-lo no cliente o que pode ser feito da seguinte maneira:

{% gist RodolfoSilva/555db4570c7b15a877fa %}

O código acima lançara um erro dizendo que a variável `module` utilizada em
`utilitarios.js` não foi definida. Porém o objeto `Utilitarios` é exportado ao
contrário do que acontece no Node.js que apenas é exportado utilizando o método
`module.exports`. Para corrigir este comportamento indesejado devemos primeiro
lidar com a definição do método `module` e ocultar as informações do código.

A solução seria buscarmos pela variável `module` e verificar se a mesma tem um
método chamado `exports` e como no Browser tudo é associado a um objeto
`window` então adicionamos o modulo como um novo método deste objeto. Além
disso para ocultamos as informações devemos envolver todas as informações
dentro de uma função autoexecutável. No final o código do módulo resultante
seria semelhante a este:

{% gist RodolfoSilva/1608d937afd0fb142ad1 %}

Caso você queira que seu modulo ofereça suporte a **[AMD][AMD]** modifique o
bloco de exportação por esta forma:

{% gist RodolfoSilva/08c53c37cdd0765e97a8 %}

No **[Schedulejs][Schedulejs]** eu estou utilizando estas técnicas porém um
pouco diferente baseando-se no método adotado pela comunidade de
desenvolvimento do Backbonejs e Jquery.

{% gist RodolfoSilva/019eb3f2b5e8d163885c %}


[AMD]: http://en.wikipedia.org/wiki/Asynchronous_module_definition "Definição de módulo Assíncrono(Asynchronous module definition)"
[Schedulejs]: https://github.com/{{ site.github_username }}/schedulejs "Agendador de tarefas"
