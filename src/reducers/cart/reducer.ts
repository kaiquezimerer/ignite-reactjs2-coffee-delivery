import { ActionTypes } from './actions'

export interface Product {
  id: string
  name: string
  image: string
  price: number
  count: number
}

interface CartState {
  cart: Product[]
}

interface Action {
  type: ActionTypes
  payload: any
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    // Adicionar novo produto no carrinho
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      // Verifica se o item já está no carrinho, se sim, incrementa a quantidade no carrinho
      const findItem = state.cart.find(
        (item) => item.id === action.payload.product.id,
      )
      if (findItem) {
        const newCart = state.cart.map((item) => {
          if (action.payload.product.id === item.id) {
            return { ...item, count: item.count + action.payload.product.count }
          }
          return item
        })

        return { ...state, cart: newCart }
      } else {
        return { ...state, cart: [...state.cart, action.payload.product] }
      }
    }
    // Aumentar (+1) quantidade de um produto no carrinho
    case ActionTypes.INCREASE_QUANTITY_IN_CART: {
      const newCart = state.cart.map((item) => {
        if (action.payload.productId === item.id) {
          return { ...item, count: item.count + 1 }
        }
        return item
      })

      return { ...state, cart: newCart }
    }
    // Diminuir (-1) quantidade de um produto no carrinho
    case ActionTypes.DECREASE_QUANTITY_IN_CART: {
      const newCart = state.cart.map((item) => {
        if (action.payload.productId === item.id) {
          return { ...item, count: item.count - 1 }
        }
        return item
      })

      return { ...state, cart: newCart }
    }
    // Remover um produto do carrinho
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.productId,
      )

      return { ...state, cart: newCart }
    }
    default: {
      return state
    }
  }
}
