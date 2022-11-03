const filter = ['string', 'number']
function queryString(query) {
  const string = []
  Object.keys(query).forEach((key) => {
    const t = typeof query[key]
    string.push(
      `${key}=${filter.includes(t) ? query[key] : JSON.stringify(query[key])}`
    )
  })
  const queryString = '?' + string.join('&')
  return queryString
}

export default ({ app }, inject) => {
  inject('queryString', queryString)
}
