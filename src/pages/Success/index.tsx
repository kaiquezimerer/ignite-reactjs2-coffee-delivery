import { SuccessContainer, SuccessCard, SuccessDetail } from './styles'

import LocationIcon from '../../assets/images/success-location-icon.svg'
import DurationIcon from '../../assets/images/success-duration-icon.svg'
import PaymentIcon from '../../assets/images/success-payment-icon.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <SuccessCard>
        <SuccessDetail icon={LocationIcon}>
          Entrega em{' '}
          <span>
            Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
          </span>
        </SuccessDetail>
        <SuccessDetail icon={DurationIcon}>
          Previsão de entrega <span>20 min - 30 min</span>
        </SuccessDetail>
        <SuccessDetail icon={PaymentIcon}>
          Pagamento na entrega <span>Cartão de Crédito</span>
        </SuccessDetail>
      </SuccessCard>
    </SuccessContainer>
  )
}
