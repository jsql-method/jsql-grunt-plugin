# grunt-jsql

Oprogramowanie opracowane przez firmę JSQL Sp. z o.o. w ramach prowadzonego projektu:

Opracowanie nowej metody procesu tworzenia oprogramowania poprzez optymalizację architektury warstwowej typu klient-serwer
Spółka JSQL sp. z.o.o. bierze udział w programie realizując projekt pt.:

“Opracowanie nowej metody procesu tworzenia oprogramowania poprzez optymalizację architektury warstwowej typu klient-serwer”

współfinansowanym przez Unię Europejską ze środków Regionalnego Programu Operacyjnego Województwa Zachodnipomorskiego 2014-2020

Oś priorytetowa 1 Gospodarka, Innowacje, Nowoczesne Technologie.
Działanie: 1.1. Projekty badawczo-rozwojowe przedsiębiorstw
Typ projektu 2

Projekty badawczo-rozwojowe przedsiębiorstw wraz z przygotowaniem do wdrożenia w działalności gospodarczej
Wartość Projektu: 1 380 501,67 PLN
Wkład Funduszy Europejskich: 1 090 679,25 PLN

Zakres i cel Projektu:
Przedmiotem Projektu jest opracowanie nowej metody procesu tworzenia oprogamowania poprzez optymalizację architektury warstwowej typu klient-serwer, dzięki której uzyskane zostaną znaczące ułatwienia oraz optymalizacje na wszystkich płaszczyznach tworzenia oraz utrzymywania oprogramownia, m.in. zmniejszony koszt zasobów ludzkich, zmniejszony koszt utrzymywania projektu, zmniejszona ilość kodu źródłoweog projektu, możliwości przesunięcia zasobów na inne projekty.

Proces badawczy składa się z 4 etapów/Zadań badawczych:
1. Opracowanie modelu teoretycznego nowej metody tworzenia oprogramowania JSQL
2. Eksperymenty badawcze – badania nad nową metodą tworzenia oprogramowania JSQL
3. Budowa i demonstracja prototypu nowej metody tworzenia oprogramowania JSQL
4. 
## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsql --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsql');
```

## The "changeQueriesToHash" task

### Overview
In your project's Gruntfile, add a section named `jsql` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  changeQueriesToHash: {
    options: {
      // Task-specific options go here.
    },
    yourTarget: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  changeQueriesToHash: {
    options: {}
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  changeQueriesToHash: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
