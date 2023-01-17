import { Outlet } from 'react-router-dom'

import { Container } from './styles'

import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </main>
  )
}
