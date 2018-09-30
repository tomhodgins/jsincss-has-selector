module.exports = (selector, child, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.querySelector(child))

    .reduce((styles, tag, count) => {

      const attr = (selector + child).replace(/\W/g, '')

      tag.setAttribute(`data-has-${attr}`, count)
      styles += `[data-has-${attr}="${count}"] { ${rule} }\n`
      return styles

    }, '')

}
