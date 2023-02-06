import React from 'react'
import './about.css'
import ME from '../../assets/me.about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {RiFolderReceivedFill} from 'react-icons/ri'
const About = () => {
  return (
  <section id='About'>
    <h5>Get To know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>

      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+year working</small>

          </article>

          <article className='about__card'>
            <FiUser className='about__icon'/>
            <h5>Clients</h5>
            <small>200 + Clients Worldwide</small>

          </article>

          <article className='about__card'>
            <RiFolderReceivedFill className='about__icon'/>
            <h5>Worlwide</h5>
            <small>100 + Completed</small>

          </article>
          
        </div>
        <p>
          <b>Graphic Design, Video Editing and Web Design</b>
        </p>
        <a href="https://wa.me/918148248261" className='btn btn-primary'>Let's Talk</a>
      
      </div>
    </div>
  </section>
  )
}

export default About
