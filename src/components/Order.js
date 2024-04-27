import React, { useEffect } from 'react'
import { child, container } from './animations'
import { motion as m } from 'framer-motion'

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setShowModal(true), 5000)
    return () => clearTimeout(timeout)
  })

  return (
    <m.div className='container order' {...container}>
      <h2>Thank you for your order :)</h2>
      <m.p {...child}>You ordered a {pizza.base} pizza with:</m.p>
      <m.div {...child}>
        {pizza.toppings.map((topping, i) => (
          <m.div key={topping}>{topping}</m.div>
        ))}
      </m.div>
    </m.div>
  )
}

export default Order
