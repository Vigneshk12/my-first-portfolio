import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://Linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/invites/contact/?i=1r2t8zfwqva72&utm_content=m5fgbwu" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials
