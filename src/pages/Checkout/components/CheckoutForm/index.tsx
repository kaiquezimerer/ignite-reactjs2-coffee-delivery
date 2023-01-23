import { CheckoutFormType } from '../..'

import { Card, CardHeader } from '../../styles'

import { Input } from '../../../../components/Input'

import AddressIcon from '../../../../assets/images/address-icon.svg'

interface CheckoutFormProps {
  form: CheckoutFormType
  handleChangeForm: (field: string, value: string | number) => void
}

export function CheckoutForm({ form, handleChangeForm }: CheckoutFormProps) {
  return (
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
          maxLength={8}
          placeholder="CEP"
          value={form.cep}
          onChange={(e) => handleChangeForm('cep', e.target.value)}
        />
        <Input
          required
          type="text"
          name="rua"
          placeholder="Rua"
          value={form.rua}
          onChange={(e) => handleChangeForm('rua', e.target.value)}
        />
        <Input
          required
          width="200px"
          type="number"
          min="1"
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={(e) => handleChangeForm('numero', e.target.value)}
        />
        <Input
          type="text"
          width="348px"
          name="complemento"
          maxLength={20}
          placeholder="Complemento"
          value={form.complemento}
          onChange={(e) => handleChangeForm('complemento', e.target.value)}
        />
        <Input
          required
          width="200px"
          type="text"
          name="bairro"
          maxLength={50}
          placeholder="Bairro"
          value={form.bairro}
          onChange={(e) => handleChangeForm('bairro', e.target.value)}
        />
        <Input
          required
          width="276px"
          type="text"
          name="cidade"
          maxLength={50}
          placeholder="Cidade"
          value={form.cidade}
          onChange={(e) => handleChangeForm('cidade', e.target.value)}
        />
        <Input
          required
          width="60px"
          type="text"
          name="uf"
          maxLength={2}
          placeholder="UF"
          value={form.uf}
          onChange={(e) => handleChangeForm('uf', e.target.value)}
        />
      </form>
    </Card>
  )
}
