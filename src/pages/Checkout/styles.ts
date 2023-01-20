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
