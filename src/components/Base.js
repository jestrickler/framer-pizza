import React from 'react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { button, child, container } from './animations'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <m.div className='base container' {...container}>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <m.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ color: '#f8e112', originX: 0, scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </m.li>
          )
        })}
      </ul>

      {pizza.base && (
        <m.div className='next' {...child}>
          <Link to='/toppings'>
            <m.button {...button}>Next</m.button>
          </Link>
        </m.div>
      )}
    </m.div>
  )
}

export default Base
