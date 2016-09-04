module.exports = function (arr, label) {
  var counts = {}
  label = label || 'value'

  arr.forEach(function (value) {
    if (typeof value !== 'string') return
    counts[value] ? counts[value]++ : counts[value] = 1
  })

  return Object.keys(counts)
    .map(function (key) {
      var obj = {}
      obj[label] = key
      obj.count = counts[key]
      return obj
    })
    .sort(function (a, b) { return b.count - a.count })
}
