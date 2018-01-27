export default (selector, child, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.querySelector(child))
    .forEach(tag => {

      const attr = selector.replace(/\W/g, '')

      styles += `[data-has-${attr}="${count}"] { ${rule} }\n`
      tag.setAttribute(`data-has-${attr}`, count)
      count++

    })

  return styles

}