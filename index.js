module.exports = function (arr) {
  let counts = {}

  arr.forEach(value => {
    if (typeof value !== 'string') return
    counts[value] ? counts[value]++ : counts[value] = 1
  })

  return Object.keys(counts)
    .map(key => { return {value: key, count: counts[key]} })
    .sort((a, b) => b.count - a.count)
}
