function slug($capitalize) {
  const name = (string) => {
    return $capitalize(string.replace(/ +(?= )/g, '')).trim()
  }

  const slugify = (string) => {
    string = string.replace(/ +(?= )/g, '').trim()
    return string.toLowerCase().split(' ').join('-')
  }

  const parse = (string) => {
    return $capitalize(string.split('-').join(' ')).trim()
  }
  return {
    name,
    slugify,
    parse,
  }
}

export default ({ app }, inject) => {
  inject('slug', slug(app.$capitalize))
}
