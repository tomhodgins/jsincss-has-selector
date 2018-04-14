export default (selector, child, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.querySelector(child))

    .reduce((styles, tag, count) => {

      const attr = (selector+child).replace(/\W/g, '')
      styles += `[data-has-${attr}="${count}"] { ${rule} }\n`
      tag.setAttribute(`data-has-${attr}`, count)
      count++

      return styles

    }, '')

}