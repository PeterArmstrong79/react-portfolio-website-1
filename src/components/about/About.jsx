import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__cards'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Studying</small>
            </article>
            <article className='about__cards'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>CodeYourFuture Bootcamp</small>
            </article>
            <article className='about__cards'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2 completed</small>
            </article>
          </div>

        </div>
      </div> 
    </section>
  )
}

export default About