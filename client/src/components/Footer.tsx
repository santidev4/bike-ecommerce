import React from 'react'
import { FooterMainContainer } from './styles/FooterStyles/FooterMAinContainer'
import { SocialIcon } from 'react-social-icons'

function Footer () {
  return (
    <FooterMainContainer>
      <div>

      <SocialIcon
        url="https://www.instagram.com"
        bgColor="#fff"
        />
      </div>

      <div>
        <SocialIcon
          url="https://www.facebook.com"
          bgColor="#fff"
        />
      </div>

    </FooterMainContainer>
  )
}

export default Footer
