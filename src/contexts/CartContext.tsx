import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addProductToCartAction,
  increaseQuantityInCartAction,
  decreaseQuantityInCartAction,
  removeProductFromCartAction,
  resetCartAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

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
  resetCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@ignite-reactjs2-coffee-delivery',
      )

      if (storageStateAsJSON) {
        const parsedCart = JSON.parse(storageStateAsJSON)
        return parsedCart
      }

      return { cart: [] }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(state)

    localStorage.setItem('@ignite-reactjs2-coffee-delivery', stateJSON)
  }, [state])

  function addProductToCart(product: Product) {
    dispatch(addProductToCartAction(product))
  }

  function increaseQuantityInCart(productId: string) {
    dispatch(increaseQuantityInCartAction(productId))
  }

  function decreaseQuantityInCart(productId: string) {
    dispatch(decreaseQuantityInCartAction(productId))
  }

  function removeProductFromCart(productId: string) {
    dispatch(removeProductFromCartAction(productId))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  function getTotalPrice() {
    const totalPrice = state.cart.reduce(
      (acc, product) => product.price * product.count + acc,
      0,
    )
    return totalPrice
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addProductToCart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeProductFromCart,
        getTotalPrice,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
