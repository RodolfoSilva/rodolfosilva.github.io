---
layout: post
title: Validar e formatar data/hora com PHP
date: 2014-02-25 11:40:11.000000000 -03:00
slug: php/validar-e-formatar-data-hora-com-php/
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
```php{numberLines: true}
<?php
function validaData($date, $format = 'Y-m-d H:i:s')
{
    if (!empty($date) && $v_date = date_create_from_format($format, $date)) {
        $v_date = date_format($v_date, $format);
        return ($v_date && $v_date == $date);
    }
    return false;
}
/*
 * Exemplos
 */
var_dump(validaData('2014-02-28 12:12:12')); # true
var_dump(validaData('2014-02-30 12:12:12')); # false
var_dump(validaData('2015-06-26', 'Y-m-d')); # true
var_dump(validaData('2015/06/26', 'Y-m-d')); # false
var_dump(validaData('28/02/2014', 'd/m/Y')); # true
var_dump(validaData('30/02/2014', 'd/m/Y')); # false
var_dump(validaData('14:50', 'H:i')); # true
var_dump(validaData('14:77', 'H:i')); # false
var_dump(validaData(14, 'H')); # true
var_dump(validaData('14', 'H')); # true
```

Com este método não precisamos ficar dando milhões de explode e implode para fazer a formatação da data, com algumas funções nativas do PHP 5 isso ficou muito mais fácil veja.<br>
```php{numberLines: true}
<?php
function converteData($format, $to_format, $date, $timezone = null)
{
    if (!empty($date)) {
        $timezone = $timezone ? $timezone : new DateTimeZone(date_default_timezone_get());
        $f_date = date_create_from_format($format, $date, $timezone);
        return date_format($f_date, $to_format);
    }
    return false;
}
 
/*
 * Exemplos
 */
var_dump(converteData('d m Y', 'Y-m-d', '06 02 2025')); //2025-02-06
var_dump(converteData('d-m-Y', 'm/d/Y H:i', '06-02-2014')); //02/06/2014 12:39
var_dump(converteData('Y-m-d', 'l F Y  H:i', '2014-02-06')); //Thursday February 2014  12:38
```

Estas duas funções são compatíveis com o __PHP 5 &gt;= 5.3__

Deixem seu comentário e aceito dicas para melhorias destes métodos.

[php]: http://php.net
