import styled from 'styled-components'

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
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};

  & > form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.75rem;
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
