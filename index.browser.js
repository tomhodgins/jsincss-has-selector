function has(selector, child, rule) {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.querySelector(child))

    .reduce((styles, tag, count) => {

      const attr = selector.replace(/\W/g, '')

      tag.setAttribute(`data-has-${attr}`, count)
      styles += `[data-has-${attr}="${count}"] { ${rule} }\n`
      count++

      return styles

    }, '')

}
