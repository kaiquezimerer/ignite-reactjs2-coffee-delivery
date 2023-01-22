import styled from 'styled-components'

import TrashIcon from '../../assets/images/trash-icon.svg'

export const CheckoutContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2.5rem 0;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['brown-400']};
    margin-bottom: 2px;
  }

  h3 + p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['brown-300']};
  }

  & > div:first-child {
    max-width: 640px;
  }

  form {
    margin-top: 2rem;
  }
`

export const Card = styled.div`
  width: 100%;
  padding: 2.5rem;
  margin: 0.75rem 0;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['gray-200']};

  & > form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.75rem;
  }

  /* Viewport <= 672px */
  @media screen and (max-width: 672px) {
    & > form div {
      width: 100% !important;
    }
  }
`

interface CardHeaderProps {
  icon: string | null
}

export const CardHeader = styled.header<CardHeaderProps>`
  padding-left: 1.875rem;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: left top;
`

export const PaymentOptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`

interface PaymentOptionButtonProps {
  icon: string | null
  isActive?: boolean
}

export const PaymentOptionButton = styled.button<PaymentOptionButtonProps>`
  width: 178px;
  border: ${(props) =>
    props.isActive
      ? `1px solid ${props.theme['purple-500']}`
      : `1px solid ${props.theme['gray-400']}`};
  border-radius: 5px;
  padding: 1rem 1rem 1rem 1.75rem;
  background-color: ${(props) =>
    props.isActive ? props.theme['purple-100'] : props.theme['gray-400']};
  color: ${(props) => props.theme['brown-300']};
  font-size: 0.75rem;
  text-transform: uppercase;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: 1rem center;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? props.theme['purple-100'] : props.theme['gray-500']};
    color: ${(props) => props.theme['brown-300']};
  }
`

export const SelectedProductContainer = styled.div`
  & > div {
    border-radius: 0.375rem 2.75rem;
    width: 448px;
  }

  /* Viewport <= 672px */
  @media screen and (max-width: 672px) {
    width: 100% !important;

    & > div {
      width: 100% !important;
    }
  }
`

export const Product = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 2rem;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  margin-bottom: 1.5rem;

  img {
    width: 64px;
    height: 64px;
  }

  & > div {
    width: 170px;

    h3 {
      width: 100%;
    }

    div {
      margin: 0;
    }

    & > div {
      display: flex;
      gap: 0.375rem;
      margin-top: 0.5rem;
    }
  }

  p {
    font-weight: 700;
    margin-left: 2rem;
  }

  /* Viewport <= 500px */
  @media screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`

export const Summary = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 0.875rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
export const DeleteButton = styled.button`
  height: 35px;
  background: pink;
  border: none;
  background-color: ${(props) => props.theme['gray-400']};
  font-size: 0.875rem;
  padding: 0.375rem 0.5rem 0.375rem 1.75rem;
  border-radius: 0.375rem;
  text-transform: uppercase;
  background-image: url(${TrashIcon});
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  // Viewport <= 768px
  @media screen and (max-width: 768px) {
    span {
      display: none;
    }
  }
`

export const ConfirmButton = styled.button`
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) => props.theme['yellow-800']};
  }
`
