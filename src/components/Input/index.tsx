import { InputHTMLAttributes } from 'react'

import { InputContainer, InputElement } from './styles'

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
}

export function Input({ width, ...rest }: InputContainerProps) {
  return (
    <InputContainer width={width ?? '100%'}>
      {!rest.required && <p>Opcional</p>}
      <InputElement {...rest} />
    </InputContainer>
  )
}
