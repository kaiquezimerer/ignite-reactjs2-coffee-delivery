import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-800']};
  cursor: pointer;

  &:not(:active):hover {
    opacity: 0.8;
  }
`

export const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-800']};
`
