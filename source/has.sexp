mixin('has', ['selector', 'child', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    filterFunc('tag.querySelector(child)',
      reduceFunc(
        createAttribute(['selector'],
          addAttribute('tag', 'has',
            addRule('', '', 'has')))))))
