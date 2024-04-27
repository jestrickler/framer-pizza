import { motion as m, useCycle } from 'framer-motion'

const loaderVariants = {
  animationOne: {
    // keyframes
    x: [-20, 20],
    y: [0, -30],
    transition: {
      // transitions for corresponding properties
      x: {
        repeatType: 'mirror',
        repeat: Infinity,
        duration: 0.5
      },
      y: {
        repeatType: 'mirror',
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeatType: 'mirror',
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')

  return (
    <>
      <m.div className='loader' variants={loaderVariants} animate={animation} />
      <small className='cycle' onClick={() => cycleAnimation()}>
        Cycle Animation
      </small>
    </>
  )
}

export default Loader
