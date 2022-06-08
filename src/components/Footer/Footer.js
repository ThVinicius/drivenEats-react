import { useContext } from 'react'
import { UserContext } from '../../provider/UserContext'
import { Container, Content, Button } from './style'

export default function Footer() {
  const { user } = useContext(UserContext)

  const button = () => {
    if (user.button === false) {
      return 'Selecione os 3 itens para fechar o pedido'
    }
    return 'Fechar pedido'
  }

  const state = () => {
    const status = {}
    if (user.button === false) {
      status.backgroundColor = '#cbcbcb'
      status.color = 'none'
      status.fontWeight = 400
      return status
    }

    status.backgroundColor = '#32b72f'
    status.color = '#ffffff'
    status.fontWeight = 700
    return status
  }

  return (
    <Container>
      <Content>
        <Button state={state()}>{button()}</Button>
        {/* <div className="enviar escondido">
            <button onclick="confirmarPedido()">Fechar pedido</button>
          </div> */}
      </Content>
    </Container>
  )
}
