import styled from 'styled-components'

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  max-width: 414px;
  width: 100%;
  height: 92px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  /* max-width: 364px;
  width: 100%;
  height: 61px;
  background-color: #cbcbcb;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 75px;
  font-size: 20px;
  font-weight: 400;
  text-align: center; */

  background-color: ${props => props.state.backgroundColor};
  color: ${props => props.state.color};
  font-weight: ${props => props.state.fontWeight};
  font-family: 'Roboto', sans-serif;
  border: none;
  width: 364px;
  height: 61px;
  border-radius: 50px;
  font-size: 20px;
`
export { Container, Content, Button }
