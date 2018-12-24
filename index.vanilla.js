export default (selector, child, rule) => {
  const attr = (selector + child).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.querySelector(child))
    .reduce((output, tag, count) => {
      output.add.push({tag: tag, count: count})
      output.styles.push(`[data-has-${attr}="${count}"] { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-has-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-has-${attr}`, ''))
  return result.styles.join('\n')
}
