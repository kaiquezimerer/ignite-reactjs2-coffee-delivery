import { useLocation } from 'react-router-dom'

import { SuccessContainer, SuccessCard, SuccessDetail } from './styles'

import LocationIcon from '../../assets/images/success-location-icon.svg'
import DurationIcon from '../../assets/images/success-duration-icon.svg'
import PaymentIcon from '../../assets/images/success-payment-icon.svg'

const PAYMENT_METHOD = Object.freeze({
  1: 'Cartão de Crédito',
  2: 'Cartão de Débito',
  3: 'Dinheiro',
})

export function Success() {
  const location = useLocation()

  const { form, paymentMethod } = location.state

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <SuccessCard>
        <SuccessDetail icon={LocationIcon}>
          Entrega em{' '}
          <span>
            {form.rua}, {form.numero} {form.bairro} - {form.cidade}, {form.uf}
            {/* Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS */}
          </span>
        </SuccessDetail>
        <SuccessDetail icon={DurationIcon}>
          Previsão de entrega <span>20 min - 30 min</span>
        </SuccessDetail>
        <SuccessDetail icon={PaymentIcon}>
          Pagamento na entrega <span>{PAYMENT_METHOD[paymentMethod]}</span>
        </SuccessDetail>
      </SuccessCard>
    </SuccessContainer>
  )
}
