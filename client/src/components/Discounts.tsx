import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardSlider } from './styles/WhatsNewStyles/CardSlider.styled'
import { MainSectionContainer } from './styles/WhatsNewStyles/MainSectionContainer'
import { SectionTitle } from './styles/WhatsNewStyles/SectionTitle'

const articles = [
  {
    title: 'bicicleta',
    price: 50000,
    discount: 20,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'
  },
  {
    title: 'bicicleta',
    price: 50000,
    discount: 15,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'
  }, {
    title: 'bicicleta',
    price: 50000,
    discount: 30,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'
  },
  {
    title: 'bicicleta',
    price: 50000,
    discount: 10,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'
  }, {
    title: 'bicicleta',
    price: 50000,
    discount: 25,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'
  }, {
    title: 'bicicleta',
    price: 50000,
    discount: 10,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'
  }
]

function Discounts () {
  return (
    <>
      <MainSectionContainer>
        <SectionTitle>
          <h2>Discounts</h2>
        </SectionTitle>

        <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination

        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
          {articles.map((art, index) => (
            <SwiperSlide key={index}>
              <CardSlider>
                <img src={art.img} alt="" />
                <h3>{art.title}</h3>
                <span>${art.price}</span>
                <p>${Math.round((art.price) - (art.price / art.discount))}</p>
              </CardSlider>
            </SwiperSlide>
          ))}
        </Swiper>

      </MainSectionContainer>
    </>
  )
}

export default Discounts
