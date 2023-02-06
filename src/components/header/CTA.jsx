import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Price</a>
        <a href="https://wa.me/918148248261" className='btn btn-primary'>Let's Talk</a>
      
      
    </div>
  )
}

export default CTA
