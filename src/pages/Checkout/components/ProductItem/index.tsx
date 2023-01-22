import { Minus, Plus } from 'phosphor-react'

import { Product, DeleteButton } from '../../styles'

import { useCount } from '../../../../hooks/useCount'

import { SelectQuantity } from '../../../../pages/Home/components/ItemCard/styles'
import { useEffect } from 'react'

type ProductType = {
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
  const [count, handleIncrementCount, handleDecrementCount] = useCount(1)

  return (
    <Product>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <div>
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
          <DeleteButton>
            <span>Remover</span>
          </DeleteButton>
        </div>
      </div>
      <p>{formatToLacalePrice(count * product.price)}</p>
    </Product>
  )
}
