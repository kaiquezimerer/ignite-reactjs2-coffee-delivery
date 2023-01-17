import { MapPin } from 'phosphor-react'

import { HeaderContainer, Container, Navigation, LocationLabel } from './styles'

import { CartButton } from '../CartButton'

import CoffeeDeliveryLogo from '../../assets/images/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <h1>
          <img
            src={CoffeeDeliveryLogo}
            alt="Coffee Delivery"
            title="Coffee Delivery"
          />
        </h1>
        <Navigation>
          <ul>
            <li>
              <LocationLabel>
                <MapPin size={22} weight="fill" />
                Porto Alegre, RS
              </LocationLabel>
            </li>
            <li>
              <CartButton count={0} />
            </li>
          </ul>
        </Navigation>
      </Container>
    </HeaderContainer>
  )
}
