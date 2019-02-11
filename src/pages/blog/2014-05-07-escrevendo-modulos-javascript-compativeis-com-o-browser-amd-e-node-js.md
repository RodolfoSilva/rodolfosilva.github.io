---
layout: post
title: Escrevendo módulos JavaScript compatíveis com o Browser, AMD e Node.js
date: 2014-05-07 09:54:42.000000000 -03:00
slug: javascript/escrevendo-modulos-javascript-compativeis-com-o-browser-amd-e-node-js/
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

```javascript{numberLines: true}
var Utilitarios = (function() {
  var Utilitarios = function(options) {
  };
 
  Utilitarios.prototype.isNull = function(obj) {
    return obj === null;
  };
 
  Utilitarios.prototype.isUndefined = function(obj) {
    return obj === void 0;
  };
 
  return Utilitarios;
})();

module.exports = Utilitarios;
```

E depois acessaríamos este módulo utilizando a função `require()`:

```javascript{numberLines: true}
var Utilitarios = require('./utilitarios'),
    util        = new Utilitarios(),
    saldo       = null;

if (util.isNull(saldo)) {
  console.log("Seu saldo é 0");
}
```

Para usá-lo no cliente o que pode ser feito da seguinte maneira:

```html{numberLines: true}
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Minha aplicação</title>
        <script src="utilitarios.js"></script>
        <script>
            var util  = new Utilitarios(),
                saldo = null;
            if (util.isNull(saldo)) {
                alert("Seu saldo é 0");
            }
        </script>
    </head>
    <body>
        
    </body>
</html>
```

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


```javascript{numberLines: true}
(function() {
  var Utilitarios = (function() {
    var Utilitarios = function(options) {
    };
   
    Utilitarios.prototype.isNull = function(obj) {
      return obj === null;
    };
   
    Utilitarios.prototype.isUndefined = function(obj) {
      return obj === void 0;
    };
   
    return Utilitarios;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Utilitarios;
  } else {
    window.Utilitarios = Utilitarios;
  }
})();
```

Caso você queira que seu modulo ofereça suporte a **[AMD][AMD]** modifique o
bloco de exportação por esta forma:

```javascript{numberLines: true}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Utilitarios;
} else if (typeof define === 'function' && define.amd) {
  define([], function() {
    return Utilitarios;
  });
} else {
  window.Utilitarios = Utilitarios;
}
```

No **[Schedulejs][Schedulejs]** eu estou utilizando estas técnicas porém um
pouco diferente baseando-se no método adotado pela comunidade de
desenvolvimento do Backbonejs e Jquery.

```javascript{numberLines: true}
(function( global, factory ) {
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory(global);
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return factory(global);
    });
  } else {
    global.Utilitarios = factory(global);
  }
}(typeof window !== 'undefined' ? window : this, function( window ) {
  var Core = function(options) {
  };
 
  Core.prototype.isNull = function(obj) {
    return obj === null;
  };
 
  Core.prototype.isUndefined = function(obj) {
    return obj === void 0;
  };
 
  return Core;
}));
```


[AMD]: http://en.wikipedia.org/wiki/Asynchronous_module_definition "Definição de módulo Assíncrono(Asynchronous module definition)"
[Schedulejs]: https://github.com/RodolfoSilva/schedulejs "Agendador de tarefas"
