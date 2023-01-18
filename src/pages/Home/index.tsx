import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { ItemCard } from './components/ItemCard'

import {
  HeroSection,
  ItemIcon,
  CoffeeListSection,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      {/* Hero */}
      <HeroSection>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <ul>
          <li>
            <ItemIcon>
              <ShoppingCart size={15} weight="fill" />
            </ItemIcon>
            Compra simples e segura
          </li>
          <li>
            <ItemIcon>
              <Timer size={15} weight="fill" />
            </ItemIcon>
            Entrega rápida e rastreada
          </li>
          <li>
            <ItemIcon>
              <Package size={15} weight="fill" />
            </ItemIcon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <ItemIcon>
              <Coffee size={15} weight="fill" />
            </ItemIcon>
            O café chega fresquinho até você
          </li>
        </ul>
      </HeroSection>
      {/* Lista de produtos (Cafés) */}
      <CoffeeListSection>
        <h2>Nossos cafés</h2>
        <ol>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
          <li>
            <ItemCard />
          </li>
        </ol>
      </CoffeeListSection>
    </HomeContainer>
  )
}
