---
layout: post
title: Como criar categorias e subcategorias com Django
date: 2015-12-17 13:30:24.000000000 -03:00
slug: python/como-criar-categorias-e-subcategorias-com-django/
categories:
- Django
- Python
tags:
- django
- django admin
- django forms
- python
---

Comecei a reconstruir a aplicação do meu TCC utilizando [Django][django] que é
um framework para desenvolvimento de aplicações Web em Python, muito utilizada
para criação de sites e portais. Estou utilizando, atualmente a versão **1.9**
para criar a  aplicação. Estava tudo lindo até que eu tive a necessidade de
criar o cadastro de categorias onde estas categorias teriam subcategorias e em
um de seus campos seria para referenciar a outra categoria PAI, então criei o
seguinte model.

{% gist RodolfoSilva/9a7e02a23268ed8f5c32 %}

Porém quando eu ia no administrador do Django para poder cadastrar as
categorias e subcategorias o mesmo listava as categorias e subcategorias no
campo **parent**. Por ser novato com o Django gastei horas e horas pesquisando
e "quebrando a cabeça", até não encontrar nada praticamente, então resolvi
deixar de ser preguiçoso, e parti para tentativa e erro, peguei a documentação
e comecei a destrinchar, então acabei descobrindo que eu poderia manipular os
campos do formulário do administrador criados dinamicamente pelo django.<br>
Então adicionei uma nova classe no meu arquivo **admin.py**.

{% gist RodolfoSilva/2e47b48d118bd49362f9 %}

Nesta classe até então ela não modifica muita coisa no comportamento do Django,
ela está apenas criando um formulário para o model **Categoria **carregando
todos os campos. Agora precisamos que o campo **parent** tenha apenas as
categorias que o valor do **parent** seja nulo. Então definir uma nova função
para retornar estas categorias e sobrescrever o método de inicialização da
classe ficando da seguinte forma.

{% gist RodolfoSilva/8ec913cecf95cca53613 %}

Pronto, agora precisamos apenas dizer ao Django para utilizar este formulário
para manipulação dos dados da categoria. Então devemos criar mais uma classe
para criar um novo modelo para administração registrar ele no Django.

{% gist RodolfoSilva/539f7fb9040a94e7e3fe %}

Pronto, agora podemos criar categorias e subcategorias utilizando apenas uma
tabela e gerenciando pelo painel de administração do Django.

Deixe seu comentário, duvidas e sugestões para melhoria, obrigado.

Referências: [https://docs.djangoproject.com/en/1.9/ref/contrib/admin/#modeladmin-objects](https://docs.djangoproject.com/en/1.9/ref/contrib/admin/#modeladmin-objects)

[django]: https://www.djangoproject.com/ "Django"
