# count-array-values  [![Build Status](https://travis-ci.org/zeke/count-array-values.svg?branch=master)](https://travis-ci.org/zeke/count-array-values)

Count the instances of each value in an array, ignoring any non-string values.

## Installation

```sh
npm install count-array-values --save
```

## Usage

The exported function returns a sorted array:

```js
const count = require('count-array-values')
count(['foo', 'bar', 'Bar', 451, 'bar', 'bar', 'baz', 'foo', null, undefined])

// [
//   {value: 'bar', count: 3},
//   {value: 'foo', count: 2},
//   {value: 'Bar', count: 1},
//   {value: 'baz', count: 1},
// ]
```

If you'd like to use a more relevant property name than `value`, specify it
as the second argument when calling the function:

```js
count(['apple', 'banana', 'apple'], 'fruit')

// [
//   {fruit: 'apple', count: 2},
//   {fruit: 'banana', count: 1}
// ]
```

You can also override the name of the `count` property:

```js
const packages = ['express', 'lodash', 'express', 'lodash', 'express', 'banana']
count(packages, 'package', 'dependents')

// [
//   {package: 'express', dependents: 3},
//   {package: 'lodash', dependents: 2},
//   {package: 'banana', dependents: 1}
// ]
```

## FAQ

#### Returning an object would be better. Why an array?

An array is returned instead of
a key-value object because objects can't properly be sorted if any of their
keys have numerical string values such as
['1999'](https://www.npmjs.com/~1999).

If you want an object instead, just do this:

```js
const count = require('count-array-values')
const packages = ['express', 'lodash', 'express', 'lodash', 'express', 'banana']
const obj = {}
count(packages, 'k', 'v').map(_ => obj[_.k] = _.v)
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [standard-markdown](https://github.com/zeke/standard-markdown): Test your Markdown files for Standard JavaScript Style™
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT
