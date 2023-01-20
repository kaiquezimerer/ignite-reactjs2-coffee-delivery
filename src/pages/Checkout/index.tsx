import { useState } from 'react'

import {
  CheckoutContainer,
  Card,
  CardHeader,
  PaymentOptionButton,
  PaymentOptionContainer,
} from './styles'

import { Input } from '../../components/Input'

import AddressIcon from '../../assets/images/address-icon.svg'
import PaymentIcon from '../../assets/images/payment-icon.svg'

import CreditIcon from '../../assets/images/credit-icon.svg'
import DebitIcon from '../../assets/images/debit-icon.svg'
import CashIcon from '../../assets/images/cash-icon.svg'

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

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  function handleChangePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod)
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <Card>
          <CardHeader icon={AddressIcon}>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </CardHeader>
          <form>
            <Input
              required
              width="200px"
              type="text"
              name="cep"
              mask="99999-999"
              placeholder="CEP"
            />
            <Input required type="text" name="rua" placeholder="Rua" />
            <Input
              required
              width="200px"
              type="number"
              min="1"
              name="numero"
              placeholder="Número"
            />
            <Input
              type="text"
              width="348px"
              name="complemento"
              maxLength={20}
              placeholder="Complemento"
            />
            <Input
              required
              width="200px"
              type="text"
              name="bairro"
              maxLength={50}
              placeholder="Bairro"
            />
            <Input
              required
              width="276px"
              type="text"
              name="cidade"
              maxLength={50}
              placeholder="Cidade"
            />
            <Input
              required
              width="60px"
              type="text"
              name="uf"
              maxLength={2}
              placeholder="UF"
            />
          </form>
        </Card>
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
      <div>
        <h2>Cafés selecionados</h2>
        <Card>
          <ol>
            <li>Expresso Tradicional</li>
            <li>Latte</li>
          </ol>
          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>Total</p>
          </div>
          <button>Confirmar pedido</button>
        </Card>
      </div>
    </CheckoutContainer>
  )
}
