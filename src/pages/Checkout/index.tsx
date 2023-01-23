import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductItem } from './components/ProductItem'
import { CheckoutForm } from './components/CheckoutForm'

import {
  CheckoutContainer,
  Card,
  CardHeader,
  PaymentOptionButton,
  PaymentOptionContainer,
  SelectedProductContainer,
  Summary,
  ConfirmButton
} from './styles'

import { CartContext } from "../../contexts/CartContext"

import PaymentIcon from '../../assets/images/payment-icon.svg'
import CreditIcon from '../../assets/images/credit-icon.svg'
import DebitIcon from '../../assets/images/debit-icon.svg'
import CashIcon from '../../assets/images/cash-icon.svg'

export interface CheckoutFormType {
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

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
  const { cart, getTotalPrice, resetCart } = useContext(CartContext)

  const [form, setForm] = useState<CheckoutFormType>({
    cep: '',
    rua: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  })
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  const navigate = useNavigate();

  function handleChangeForm(field: string, value: string | number) {
    setForm((state) => ({ ...state, [field]: value }))
  }

  function handleSubmit() {
    resetCart();

    navigate('/success', {
      state: {
        form,
        paymentMethod
      }
    })
  }

  function handleChangePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod)
  }

  const DELIVERY_COST = 3.5;
  const totalProductPrice = getTotalPrice();
  const totalPrice = totalProductPrice + DELIVERY_COST;

  function isChackoutFormValidate() {
    if (!cart.length) return false

    if (form.cep === '') return false;
    if (form.rua === '') return false;
    if (form.numero <= 0) return false;
    if (form.bairro === '') return false;
    if (form.cidade === '') return false;
    if (form.uf === '') return false;

    if (!paymentMethod) return false

    return true
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <CheckoutForm form={form} handleChangeForm={handleChangeForm}/>
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
              Dinheiro
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
                  product={product}
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
          <ConfirmButton 
            type="button" 
            disabled={!isChackoutFormValidate()} 
            onClick={handleSubmit}
          >
            Confirmar pedido
          </ConfirmButton>
        </Card>
      </SelectedProductContainer>
    </CheckoutContainer>
  )
}
