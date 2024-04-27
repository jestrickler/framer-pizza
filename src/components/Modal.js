import { AnimatePresence, motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { button } from './animations'

// variants
const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}
const modal = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: { opacity: 1, y: '40vh', transition: { delay: 0.2 } }
}

const Modal = ({ showModal }) => (
  <AnimatePresence mode='wait'>
    {showModal ? (
      <m.div
        className='backdrop'
        variants={backdrop}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <m.div
          className='modal'
          variants={modal}
          /* animations propagate from parent */
        >
          <p>Want Another Pizza?</p>
          <Link to='/'>
            <m.button {...button}>Start Again</m.button>
          </Link>
        </m.div>
      </m.div>
    ) : null}
  </AnimatePresence>
)

export default Modal
