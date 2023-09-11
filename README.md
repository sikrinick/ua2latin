# ua2latin

## Description

### en
Transliteration for Ukrainian alphabet to Latin.  
According to [resolution of Cabinet of Ministers of Ukraine](https://zakon.rada.gov.ua/laws/show/55-2010-%D0%BF#Text).  
Quality assurance can be done on a web-page of [State Migration Service of Ukraine](https://dmsu.gov.ua/services/transliteration.html).

### uk
Транслітерація українського алфавіту латиницею.  
Відповідно до [постанови КМУ про впорядкування транслітерації українського алфавіту латиницею](https://zakon.rada.gov.ua/laws/show/55-2010-%D0%BF#Text).
Для перевірки якості можете використовувати рішення на сторінці [ДМСУ](https://dmsu.gov.ua/services/transliteration.html)


## Installation

```shell
npm -i ua2latin
```

## Examples

```ts
import {transliterateUaToLatin} from "ua2latin";

const lastName = transliterateUaToLatin("Лебігович")
console.log(lastName) // "Lebihovych"
```