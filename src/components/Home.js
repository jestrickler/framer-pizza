import React from 'react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { button, child, container } from './animations'
import Loader from './Loader'

const Home = () => {
  return (
    <m.div className='home container' {...container}>
      <h2>Welcome to Pizza Joint</h2>
      <m.div {...child}>
        <Link to='/base'>
          <m.button {...button}>Create Your Pizza</m.button>
        </Link>
        <Loader />
      </m.div>
    </m.div>
  )
}

export default Home
