import { useContext } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { ItemCardContainer, SelectQuantity, Button } from './styles'

import { Product } from '../..'

import { useCount } from '../../../../hooks/useCount'

import { CartContext } from '../../../../contexts/CartContext'

interface ItemCardProps {
  product: Product
}

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}

export function ItemCard({ product }: ItemCardProps) {
  const { addProductToCart } = useContext(CartContext)

  const { count, reset, handleIncrementCount, handleDecrementCount } =
    useCount(1)

  function handleAddProduct(product: Product) {
    const newProduct = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      count,
    }
    addProductToCart(newProduct)
    reset()
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
          <>
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
          </>
        </SelectQuantity>
        <Button
          type="button"
          title="Carrinho"
          onClick={() => handleAddProduct(product)}
        >
          <ShoppingCartSimple size={22} weight="fill" />
        </Button>
      </div>
    </ItemCardContainer>
  )
}
