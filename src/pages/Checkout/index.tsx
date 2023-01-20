import { CheckoutContainer, Card, CardHeader } from './styles'

import { Input } from '../../components/Input'

import AddressIcon from '../../assets/images/address-icon.svg'
import PaymentIcon from '../../assets/images/payment-icon.svg'

export function Checkout() {
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
              autoFocus
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
          <div>Cartão de crédito</div>
          <div>Cartão de débito</div>
          <div>Cartão de dinheiro</div>
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
