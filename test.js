var test = require('tape')
var countArrayValues = require('.')

var input = ['foo', 'bar', 'Bar', 451, 'bar', 'bar', 'baz', 'foo', null, undefined]
var output = [
  {value: 'bar', count: 3},
  {value: 'foo', count: 2},
  {value: 'Bar', count: 1},
  {value: 'baz', count: 1}
]

test('countArrayValues', function (t) {
  t.deepEqual(countArrayValues(input), output, 'returns an array of objects, each with a `value` and `count` property, sorted descending by count.')
  t.end()
})
