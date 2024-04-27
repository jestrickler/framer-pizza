import React from 'react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { button, child, container } from './animations'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'extra cheese',
    'pepperoni',
    'sausage',
    'mushrooms',
    'olives',
    'onions',
    'peppers',
    'tomatoes'
  ]

  return (
    <m.div className='toppings container' {...container}>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <m.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ color: '#f8e112', originX: 0, scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </m.li>
          )
        })}
      </ul>

      <m.div className='next' {...child}>
        <Link to='/order'>
          <m.button {...button}>Order</m.button>
        </Link>
      </m.div>
    </m.div>
  )
}

export default Toppings
