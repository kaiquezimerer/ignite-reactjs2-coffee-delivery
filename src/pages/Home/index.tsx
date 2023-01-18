import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ItemCard } from './components/ItemCard'

import {
  HeroSection,
  ItemIcon,
  CoffeeListSection,
  HomeContainer,
} from './styles'

export interface Product {
  id: string
  name: string
  image: string
  description: string
  types: string[]
  price: number
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([])

  function loadProductsList() {
    fetch('coffee.json')
      .then((response) => {
        return response.json()
      })
      .then((data: Product[]) => {
        setProducts(data)
      })
  }

  useEffect(() => {
    loadProductsList()
  }, [])

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
        {!!products.length && (
          <ol>
            {products.map((product) => (
              <li key={product.id}>
                <ItemCard product={product} />
              </li>
            ))}
          </ol>
        )}
      </CoffeeListSection>
    </HomeContainer>
  )
}
