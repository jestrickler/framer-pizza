const button = {
  whileHover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)'
  }
}

const containerVariant = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', staggerChildren: 0.4, when: 'beforeChildren' }
  },
  exit: {
    x: '-100vw',
    transition: { type: 'spring', duration: 0.2 }
  }
}

const childVariant = {
  initial: {
    opacity: 0,
    x: '-100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  }
}

/**
 some fanciness for using spread notation with variants
 <m.div {...container}>
 <m.div {...child}></m.div>
 </m.div>
 */
const container = {
  variants: containerVariant,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit'
}
const child = {
  variants: childVariant
  /* animations propagate from parent */
}

export { button, child, container }
