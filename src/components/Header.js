import React from 'react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const svgVariants = {
  initial: { rotate: -180 },
  animate: { rotate: 0, transition: { duration: 1 } }
}

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <m.svg
          className='pizza-svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          variants={svgVariants}
          initial='initial'
          animate='animate'
        >
          <m.path
            fill='none'
            d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
            variants={pathVariants}
          />
          <m.path
            fill='none'
            d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
            variants={pathVariants}
          />
        </m.svg>
      </div>
      <m.div
        className='title'
        initial={{ y: -100 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        whileHover={{
          textShadow: '0px 0px 8px rgb(255, 255, 255)'
        }}
      >
        <Link to='/'>
          <h1>Pizza Joint</h1>
        </Link>
      </m.div>
    </header>
  )
}

export default Header
