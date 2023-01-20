import { CheckoutContainer, Card, CardHeader } from './styles'

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
            <input type="text" name="cep" placeholder="CEP" />
            <input type="text" name="rua" placeholder="Rua" />
            <input type="text" name="numero" placeholder="Número" />
            <input
              type="text"
              name="complemento"
              placeholder="Complemento (Opcional)"
            />
            <input type="text" name="bairro" placeholder="Bairro" />
            <input type="text" name="cidade" placeholder="Cidade" />
            <input type="text" name="uf" placeholder="UF" />
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
