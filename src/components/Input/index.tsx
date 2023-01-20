import { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

import { InputContainer, InputElement } from './styles'

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
  mask?: string
}

export function Input({ mask, width, ...rest }: InputContainerProps) {
  return (
    <InputContainer width={width ?? '100%'}>
      {!rest.required && <p>Opcional</p>}
      <InputMask mask={mask}>{() => <InputElement {...rest} />}</InputMask>
    </InputContainer>
  )
}
