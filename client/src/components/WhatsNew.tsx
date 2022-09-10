import { useState } from 'react'
import { CardSlider } from './styles/WhatsNewStyles/CardSlider.styled'
import { Slider } from './styles/WhatsNewStyles/Slider.styled'
import { MainSliderCotainer }  from './styles/WhatsNewStyles/MainSliderContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation'

const articles = [
    {title: 'bicicleta',
    price: 50000,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z',
    },
    {title: 'bicicleta',
    price: 50000,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'},{title: 'bicicleta',
    price: 50000,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z'},
    {title: 'bicicleta',
    price: 50000,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z',
    },{title: 'bicicleta',
    price: 50000,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z',
    },{title: 'bicicleta',
    price: 50000,
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80z',
    },
]


function WhatsNew(): JSX.Element {

  const [ position, setPosition ] = useState<number>(1)

  const onRight = () => {
    if (position < articles.length - 1) setPosition(position + 1)
}

  const onLeft = () => {
    if (articles.length > 0) setPosition(position - 1)
  }
  //TODO usar swipeable para darle funcionalidad en mobile

  return (
    <>
      <h2>What's NEW</h2>
      <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination

      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <button onClick={onLeft}>{`<`}</button>
      {articles.map((art, index) => (
                <SwiperSlide>
                  <CardSlider>
                      <img src={art.img} alt="" />
                      <h3>{art.title}</h3>
                      <p>${art.price}</p>
                  </CardSlider>
                  </SwiperSlide>
              ))}
      <button onClick={onRight}>{`>`}</button>

      </Swiper>
      <MainSliderCotainer>

          {/* <Slider>
              <button onClick={onLeft}>{`<`}</button>
              {articles.map((art, index) => (
                
                <CardSlider>
                      <img src={art.img} alt="" />
                      <h3>{art.title}</h3>
                      <p>${art.price}</p>
                  </CardSlider>
              ))}
            <button onClick={onRight}>{`>`}</button>
          </Slider> */}
      </MainSliderCotainer>
    </>
  )
}

export default WhatsNew