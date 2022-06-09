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

  const toSend = () => {
    if (user.button === false) return
    // const message = window.encodeURIComponent(
    //   `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(
    //     precoPrato +
    //     precoBebida +
    //     precoSobremesa
    //   )
    //     .toFixed(2)
    //     .toString()
    //     .replace('.', ',')}\n\nNome: ${nome}\nEndereço: ${endereco}`
    // )
    console.log(
      `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(
        precoPrato +
        precoBebida +
        precoSobremesa
      )
        .toFixed(2)
        .toString()
        .replace('.', ',')}\n\nNome: ${nome}\nEndereço: ${endereco}`
    )
  }

  return (
    <Container>
      <Content>
        <Button state={state()} onClick={toSend}>
          {button()}
        </Button>
        {/* <div className="enviar escondido">
            <button onclick="confirmarPedido()">Fechar pedido</button>
          </div> */}
      </Content>
    </Container>
  )
}
