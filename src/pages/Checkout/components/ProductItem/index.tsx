import { useContext } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { formatToLocalePrice } from '../..'
import { Product, DeleteButton } from '../../styles'

import { CartContext } from '../../../../contexts/CartContext'

import { SelectQuantity } from '../../../../pages/Home/components/ItemCard/styles'

type ProductType = {
  id: string
  image: string
  name: string
  price: number
}

interface ProductItemProps {
  product: ProductType
}

export function ProductItem({ product }: ProductItemProps) {
  const {
    cart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    removeProductFromCart,
  } = useContext(CartContext)

  function handleIncrement() {
    increaseQuantityInCart(product.id)
  }

  function handleDecrement() {
    decreaseQuantityInCart(product.id)
  }

  function handleRemoveProduct() {
    removeProductFromCart(product.id)
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
          <DeleteButton onClick={handleRemoveProduct}>
            <span>Remover</span>
          </DeleteButton>
        </div>
      </div>
      <p>{formatToLocalePrice(count * product.price)}</p>
    </Product>
  )
}
