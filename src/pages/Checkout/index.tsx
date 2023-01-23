import { useContext, useState } from 'react'
import { Minus, Plus } from "phosphor-react"

import { CheckoutForm } from "./components/CheckoutForm"

import {
  CheckoutContainer,
  Card,
  CardHeader,
  PaymentOptionButton,
  PaymentOptionContainer,
  SelectedProductContainer,
  Product,
  Summary,
  DeleteButton,
  ConfirmButton
} from './styles'

import PaymentIcon from '../../assets/images/payment-icon.svg'
import CreditIcon from '../../assets/images/credit-icon.svg'
import DebitIcon from '../../assets/images/debit-icon.svg'
import CashIcon from '../../assets/images/cash-icon.svg'
import { ProductItem } from "./components/ProductItem"
import { CartContext } from "../../contexts/CartContext"

enum PaymentMethod {
  'CREDIT_CARD' = 1,
  'DEBIT_CARD'=  2,
  'CASH' = 3
}

const PAYMENT_METHOD = Object.freeze({
  'CREDIT_CARD': 1,
  'DEBIT_CARD': 2,
  'CASH': 3
})

export function formatToLocalePrice(price: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

export function Checkout() {
  const { cart, getTotalPrice, } = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  function handleChangePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod)
  }

  const DELIVERY_COST = 3.5;
  const totalProductPrice = getTotalPrice();
  const totalPrice = totalProductPrice + DELIVERY_COST;

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <CheckoutForm />
        <Card>
          <CardHeader icon={PaymentIcon}>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </CardHeader>
          <PaymentOptionContainer>
            <PaymentOptionButton 
              icon={CreditIcon}
              isActive={paymentMethod === PAYMENT_METHOD.CREDIT_CARD} 
              onClick={() => {
                handleChangePaymentMethod(PAYMENT_METHOD.CREDIT_CARD)
              }} 
            >
              Cartão de crédito
            </PaymentOptionButton>
            <PaymentOptionButton 
              icon={DebitIcon}
              isActive={paymentMethod === PAYMENT_METHOD.DEBIT_CARD} 
              onClick={() => {
                handleChangePaymentMethod(PAYMENT_METHOD.DEBIT_CARD)
              }} 
            >
              Cartão de débito
            </PaymentOptionButton>
            <PaymentOptionButton 
              icon={CashIcon}
              isActive={paymentMethod === PAYMENT_METHOD.CASH} 
              onClick={() => {
                handleChangePaymentMethod(PAYMENT_METHOD.CASH)
              }} 
            >
              Cartão de dinheiro
            </PaymentOptionButton>
          </PaymentOptionContainer>
        </Card>
      </div>
      <SelectedProductContainer>
        <h2>Cafés selecionados</h2>
        <Card>
          <ol>
            {
              cart.map((product) => (
                <ProductItem
                  product={
                    product
                  }
                />
              ))
            }
          </ol>
          <Summary>
            <div>
              <p>Total de itens</p>
              <p>{formatToLocalePrice(totalProductPrice)}</p> 
            </div>
            <div>
              <p>Entrega</p>  
              <p>{formatToLocalePrice(DELIVERY_COST)}</p>
            </div>
            <div>
              <p><span>Total</span></p>
              <p><span>{formatToLocalePrice(totalPrice)}</span></p>
            </div>
          </Summary>
          <ConfirmButton type="button">
            Confirmar pedido
          </ConfirmButton>
        </Card>
      </SelectedProductContainer>
    </CheckoutContainer>
  )
}
