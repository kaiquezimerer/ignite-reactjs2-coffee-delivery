import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { ItemCardContainer, SelectQuantity, Button } from './styles'

import { Product } from '../..'

interface ItemCardProps {
  product: Product
}

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}

export function ItemCard({ product }: ItemCardProps) {
  const [count, setCount] = useState(1)

  function handleIncrementCount() {
    setCount((state) => state + 1)
  }

  function handleDecrementCount() {
    setCount((state) => state - 1)
  }

  return (
    <ItemCardContainer>
      <img
        src={`images/${product.image}`}
        width="120"
        height="120"
        alt={product.name}
      />
      {product.types.map((type) => (
        <h4 key={type}>{type}</h4>
      ))}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div>
        <p>
          R$ <span>{formatPrice(product.price)}</span>
        </p>
        <SelectQuantity>
          <button
            type="button"
            disabled={count === 1}
            onClick={handleDecrementCount}
          >
            <Minus size={15} />
          </button>
          {count}
          <button
            type="button"
            disabled={count === 99}
            onClick={handleIncrementCount}
          >
            <Plus size={15} />
          </button>
        </SelectQuantity>
        <Button title="Carrinho">
          <ShoppingCartSimple size={22} weight="fill" />
        </Button>
      </div>
    </ItemCardContainer>
  )
}
