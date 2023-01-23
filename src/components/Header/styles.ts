import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
`

export const Navigation = styled.nav`
  & > ul {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocationLabel = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-800']};
  background-color: ${(props) => props.theme['purple-100']};
  padding: 0.625rem 0.5rem;
  border-radius: 0.375rem;

  /* Viewport <= 368px */
  @media screen and (max-width: 368px) {
    & > span {
      display: none;
    }
  }
`
