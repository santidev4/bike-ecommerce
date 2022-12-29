import React from 'react'
import { FooterMainContainer } from './styles/FooterStyles/FooterMAinContainer'
import { SocialIcon } from 'react-social-icons'

function Footer () {
  return (
    <FooterMainContainer>

      <SocialIcon
        url="https://www.instagram.com"
        bgColor="#fff"
        />

        <SocialIcon
          url="https://www.facebook.com"
          bgColor="#fff"
        />

    </FooterMainContainer>
  )
}

export default Footer
