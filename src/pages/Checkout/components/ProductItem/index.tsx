import { Minus, Plus } from 'phosphor-react'

import { Product, DeleteButton } from '../../styles'

import { SelectQuantity } from '../../../../pages/Home/components/ItemCard/styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

type ProductType = {
  id: string
  image: string
  name: string
  price: number
}

interface ProductItemProps {
  product: ProductType
}

function formatToLacalePrice(price: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

export function ProductItem({ product }: ProductItemProps) {
  const { cart, increaseQuantityInCart, decreaseQuantityInCart } =
    useContext(CartContext)

  function handleIncrement() {
    increaseQuantityInCart(product.id)
  }

  function handleDecrement() {
    decreaseQuantityInCart(product.id)
  }

  const count = cart.find((item) => item.id === product.id)?.count

  return (
    <Product key={product.id}>
      <img src={`images/${product.image}`} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <div>
          <SelectQuantity>
            <>
              <button
                type="button"
                disabled={count === 1}
                onClick={handleDecrement}
              >
                <Minus size={15} />
              </button>
              {count}
              <button
                type="button"
                disabled={count === 99}
                onClick={handleIncrement}
              >
                <Plus size={15} />
              </button>
            </>
          </SelectQuantity>
          <DeleteButton>
            <span>Remover</span>
          </DeleteButton>
        </div>
      </div>
      <p>{formatToLacalePrice(count * product.price)}</p>
    </Product>
  )
}
