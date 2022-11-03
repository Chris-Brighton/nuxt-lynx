function groupBy(array, key) {
  return array.reduce(function (item, index) {
    ;(item[index[key]] = item[index[key]] || []).push(index)
    return item
  }, {})
}

export default ({ app }, inject) => {
  inject('groupBy', groupBy)
}
