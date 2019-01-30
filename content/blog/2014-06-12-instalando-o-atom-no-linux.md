---
layout: post
title: Instalando o Atom no linux
date: 2014-06-12 12:23:38.000000000 -03:00
slug: opensource/instalando-o-atom-no-linux/
categories:
- GitHub
- OpenSource
- Utilitários
tags:
- atom
- github
- ide
- open-source
- utilitarios
---

## O que é o [Atom][Atom]?

O [Atom][Atom] é o mais novo editor OpenSource
desenvolvido pelo GitHub e distribuído sob a licença [MIT][MIT]. Seu código
foi liberado a pouco tempo e com uma versão oficial para OS X, mas já podemos
compilar para Windows e Linux.

## Instalanado Atom no Ubuntu via PPA:

No blog [WEB UPD8][WEB UPD8] existe um artigo
explicando como instalar o Atom via PPA.
Veja neste link o artigo: [http://www.webupd8.org/2014/05/install-atom-text-editor-in-ubuntu-via-ppa.html](http://www.webupd8.org/2014/05/install-atom-text-editor-in-ubuntu-via-ppa.html)

## Instalando Atom no Fedora/CentOS

### 1\. Vamos instalar todas as dependências:

`sudo yum -y install node npm nodejs libgnome-keyring-devel lsb git git-core`

### 2\. Devemos instalar o [Google Chrome][Google Chrome]. Por quê?

O [Atom][Atom] funciona com base no
"**[Chromium Embedded Framework][Chromium Embedded Framework]**" e a
instalação necessita do Google Chrome para que o Atom possa ser carregado
com as bibliotecas do navegador em especial o `libudev.so.0`

### 3\. Instalar a última versão do [NPM][NPM] localmente

`cd ~`<br>
`npm install npm`<br>
`export PATH="$HOME/node_modules/.bin:$PATH"`<br>
`npm --version` _Deve ser **1.4.10** ou superior_

### Remover o gyp

`sudo yum -y remove gyp`

### Descarregar, compilar e instalar o Atom Editor

`git clone https://github.com/atom/atom`<br>
`cd atom`<br>
`./script/build`<br>
`chmod +x /tmp/atom-build/Atom/atom`<br>
`mkdir -p ~/apps/atom/share`<br>
`mv /tmp/atom-build/Atom ~/apps/atom/share/atom`<br>
`cp atom.sh ~/apps/atom/share/`

### Restaurar a instalação do NodeJS

`sudo yum -y install node npm nodejs node-gyp`

### Para finalizar

Agora, para abrir o Atom basta executar:
`LD_LIBRARY_PATH=/opt/google/chrome ~/apps/atom/share/atom.sh`]

Você pode criar um lançador para executar este comando.

`[Desktop Entry]
Type=Application
Name=Atom
Comment=IDE
Icon=~/apps/atom/share/atom/resources/app/resources/atom.png
Exec=~/apps/atom/share/atom/atom
Terminal=false
Categories=Development;
`

Fonte: [Xenode Systems](http://blog.xenodesystems.com/2014/05/instalar-atom-editor-en-fedora-20?class=nous "Xenode Systems")

[Chromium Embedded Framework]: https://code.google.com/p/chromiumembedded/
[MIT]: http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT "Licença MIT"
[Atom]: https://atom.io/ "Atom editor"
[WEB UPD8]: http://www.webupd8.org "WEB UPD8"
[Google Chrome]: http://chrome.google.com/ "Google Chrome"
[NPM]: http://nodebr.com/o-que-e-a-npm-do-nodejs/ "O que é a NPM do Node.JS"
