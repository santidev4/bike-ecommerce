import { Button } from "./styles/Button.styled"
import { ButtonContainer } from "./styles/HeroStyles/ButtonContainer.styled"
import { HeroContainer } from "./styles/HeroStyles/HeroContainer.styled"
import { HeroImage } from "./styles/HeroStyles/HeroImage.styled"

function Hero() {
  return (
    <HeroContainer>
        <HeroImage src='../../src/assets/hero-image.jpg' />

        <div>
                <h1>Get Ready to Bike</h1>
                <h3>The best bikes & the best prices</h3>
            <ButtonContainer>

                <Button>Buy NOW</Button>
            </ButtonContainer>
        </div>

    </HeroContainer>
  )
}

export default Hero