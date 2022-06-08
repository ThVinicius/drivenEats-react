import styled from 'styled-components'

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`
const Content = styled.div`
  width: 414px;
  height: 92px;
  background-color: #cf2b2b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    margin: 8px 21px;
  }

  h1 {
    font-size: 44px;
    color: #ffffff;
    font-family: 'Righteous', cursive;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
  }
`

export { Container, Content }
