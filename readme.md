# count-array-values

Count the instances of each value in an array, ignoring any non-string values.

## Installation

```sh
npm install count-array-values --save
```

## Usage

```js
var count = require('count-array-values')
count(['foo', 'bar', 'Bar', 451, 'bar', 'bar', 'baz', 'foo', null, undefined])

// [
//   {value: 'bar', count: 3},
//   {value: 'foo', count: 2},
//   {value: 'Bar', count: 1},
//   {value: 'baz', count: 1},
// ]
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
