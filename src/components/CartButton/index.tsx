import { ShoppingCart } from 'phosphor-react'

import { Badge, Button } from './styles'

interface CartButtonProps {
  count: number
}

export function CartButton({ count }: CartButtonProps) {
  return (
    <Button title="Carrinho">
      {!!count && <Badge>{count}</Badge>}
      <ShoppingCart size={22} weight="fill" />
    </Button>
  )
}
