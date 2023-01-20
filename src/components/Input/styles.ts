import styled from 'styled-components'

interface InputContainerProps {
  width: string
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: ${(props) => props.width};
  display: inline-block;

  p {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    text-align: right;
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['brown-100']};
  }
`

export const InputElement = styled.input`
  position: relative;
  outline: none;
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['gray-300']};
  font-size: 0.875rem;
  color: ${(props) => props.theme['brown-300']};
  transition: border-color 200ms ease;

  &::placeholder {
    color: ${(props) => props.theme['brown-100']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-800']};
  }

  &:not(:required) {
    padding-right: 4rem;
  }
`
