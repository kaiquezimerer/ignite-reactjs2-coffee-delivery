import { createContext, ReactNode, useEffect, useState } from 'react'

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
  increaseQuantityInCart: (productId: string) => void
  decreaseQuantityInCart: (productId: string) => void
  removeProductFromCart: (productId: string) => void
  getTotalPrice: () => number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const storageStateAsJSON = localStorage.getItem(
      '@ignite-reactjs2-coffee-delivery',
    )

    if (storageStateAsJSON) {
      const parsedCart = JSON.parse(storageStateAsJSON)
      setCart(parsedCart)
    }
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@ignite-reactjs2-coffee-delivery', stateJSON)
  }, [cart])

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

  function increaseQuantityInCart(productId: string) {
    const newCart = cart.map((item) => {
      if (productId === item.id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    })

    setCart(newCart)
  }

  function decreaseQuantityInCart(productId: string) {
    const newCart = cart.map((item) => {
      if (productId === item.id) {
        return { ...item, count: item.count - 1 }
      }
      return item
    })

    setCart(newCart)
  }

  function removeProductFromCart(productId: string) {
    const newCart = cart.filter((item) => item.id !== productId)

    setCart(newCart)
  }

  function getTotalPrice() {
    const totalPrice = cart.reduce(
      (acc, product) => product.price * product.count + acc,
      0,
    )

    return totalPrice
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeProductFromCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
