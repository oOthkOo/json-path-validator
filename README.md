json-path-validator
===================

A simple function who can help you to know if an object path is valid

Usage
-----
This is how you can use this function.

``` html

var foo = {
  valid: false,
  power: 1404,
  options: [
    {
      lives: 2,
      games: 14
      bonus: [
        { type: 'maxGauge', count: 145 },
        { type: 'maxGauge', count: 52 }
      ]
    }
  ]
}
  
console.log( jpv( foo, 'valid', 0 ) ) // shows 'false'
console.log( jpv( foo, 'options[0].lives', 0 ) ) // shows '2'
console.log( jpv( foo, 'options[0].notExist', 10 ) ) // shows '10'

```
