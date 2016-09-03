module.exports = function (arr) {
  var counts = {}

  arr.forEach(function (value) {
    if (typeof value !== 'string') return
    counts[value] ? counts[value]++ : counts[value] = 1
  })

  return Object.keys(counts)
    .map(function (key) { return {value: key, count: counts[key]} })
    .sort(function (a, b) { return b.count - a.count })
}
