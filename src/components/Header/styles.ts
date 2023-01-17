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
