import { createContext, ReactNode, useState } from 'react'

interface Product {
  id: string
  image: string
  name: string
  count: number
  price: number
}

interface CartContextType {
  cart: Product[]
  addProductToCart: (product: Product) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  console.log(cart)

  function addProductToCart(product: Product) {
    // Verifica se o item já está no carrinho, se sim, incrementa a quantidade no carrinho
    const findItem = cart.find((item) => item.id === product.id)

    if (findItem) {
      const newCart = cart.map((item) => {
        if (product.id === item.id) {
          return { ...item, count: item.count + product.count }
        }
        return item
      })

      setCart(newCart)
    } else {
      setCart((state) => [...state, product])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
