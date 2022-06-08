import styled from 'styled-components'

const Container = styled.main`
  max-width: 414px;
  width: 100%;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  && > div {
    width: 100%;
    padding-left: 19px;
  }
  h3 {
    font-size: 26px;
    color: #333333;
    font-family: 'Righteous', cursive;
  }
`

export { Container }
