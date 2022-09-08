import { useState } from 'react'
import { CardSlider } from './styles/WhatsNewStyles/CardSlider.styled'
import { Slider } from './styles/WhatsNewStyles/Slider.styled'
import { WhatsNewContainer }  from './styles/WhatsNewStyles/WhatsNew.styled'

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
    <WhatsNewContainer>
        <h2>What's NEW</h2>

        <Slider>
            <button onClick={onLeft}>{`<`}</button>
            {articles.map((art, index) => (
                <CardSlider animate={{
                    rotate: 0,
                    left: '100vw',
                    scale: index === position ? 1 : 0.8
                }}>
                    <img src={art.img} alt="" />
                    <h3>{art.title}</h3>
                    <p>${art.price}</p>
                </CardSlider>
            ))}
           <button onClick={onRight}>{`>`}</button>
        </Slider>
    </WhatsNewContainer>
  )
}

export default WhatsNew