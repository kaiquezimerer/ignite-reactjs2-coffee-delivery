import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, Container, Navigation, LocationLabel } from './styles'

import { CartButton } from '../CartButton'

import CoffeeDeliveryLogo from '../../assets/images/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <NavLink to="/">
          <h1>
            <img
              src={CoffeeDeliveryLogo}
              alt="Coffee Delivery"
              title="Coffee Delivery"
            />
          </h1>
        </NavLink>
        <Navigation>
          <ul>
            <li>
              <LocationLabel>
                <MapPin size={22} weight="fill" />
                São Paulo, SP
              </LocationLabel>
            </li>
            <li>
              <NavLink to="/checkout">
                <CartButton count={0} />
              </NavLink>
            </li>
          </ul>
        </Navigation>
      </Container>
    </HeaderContainer>
  )
}
