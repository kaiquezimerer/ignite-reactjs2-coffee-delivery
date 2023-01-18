import { ItemCardContainer, SelectQuantity, Button } from './styles'

import CoffeExpressoImg from '../../../../assets/images/coffee-expresso.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function ItemCard() {
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
          R$ <span>9,90</span>
        </p>
        <SelectQuantity>
          <button>
            <Minus size={15} />
          </button>
          1
          <button>
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
