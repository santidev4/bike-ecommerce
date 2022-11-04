import React from 'react'
import Discounts from '../components/Discounts'
import Hero from '../components/Hero'
import WhatsNew from '../components/WhatsNew'
import useStore from '../store/useStore'

function Home () {
  const username = useStore(state => state.username)
  console.log(username, 'username from home')

  return (
    <>
      <Hero />
      <WhatsNew />
      <Discounts />
    </>
  )
}

export default Home
