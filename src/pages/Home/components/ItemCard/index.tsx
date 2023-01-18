import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { ItemCardContainer, SelectQuantity, Button } from './styles'

import CoffeExpressoImg from '../../../../assets/images/coffee-expresso.png'

const DEFAULT_PRICE = 9.9

function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}

export function ItemCard() {
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
        src={CoffeExpressoImg}
        width="120"
        height="120"
        alt="Café Expresso"
      />
      <h4>Tradicional</h4>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <p>
          R$ <span>{formatPrice(DEFAULT_PRICE)}</span>
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
