import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Coffee Delivery</p>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
