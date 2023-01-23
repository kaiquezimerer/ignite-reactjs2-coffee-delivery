/* eslint-disable no-unused-vars */

import { Product } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  INCREASE_QUANTITY_IN_CART = 'INCREASE_QUANTITY_IN_CART',
  DECREASE_QUANTITY_IN_CART = 'DECREASE_QUANTITY_IN_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  GET_TOTAL_PRICE = 'GET_TOTAL_PRICE',
}

export function addProductToCartAction(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  }
}

export function increaseQuantityInCartAction(productId: string) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_IN_CART,
    payload: {
      productId,
    },
  }
}

export function decreaseQuantityInCartAction(productId: string) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_IN_CART,
    payload: {
      productId,
    },
  }
}

export function removeProductFromCartAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  }
}
