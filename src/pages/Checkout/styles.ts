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

  & > div:first-child {
    max-width: 640px;
  }
`

export const Card = styled.div`
  width: 100%;
  padding: 2.5rem;
  margin: 0.75rem 0;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`
