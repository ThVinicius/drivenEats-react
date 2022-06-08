import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
}
`
export default GlobalStyle
