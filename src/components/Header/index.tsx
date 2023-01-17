import { HeaderContainer, Container, Navigation } from './styles'

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
            <li>Porto Alegre, RS</li>
            {/* TODO: Criar IconButton p/ Botão de carrinho e substituir aqui */}
            <li>
              <button>Carrinho</button>
            </li>
          </ul>
        </Navigation>
      </Container>
    </HeaderContainer>
  )
}
