import { useContext } from 'react'
import { UserContext } from '../../provider/UserContext'
import { Container, Content, Button } from './style'

const qtd = (array, index) => {
  if (array[index].qtd > 1) {
    return ` ${array[index].qtd}x`
  }
  return ''
}

const request = array => {
  let aux = ''
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      aux = `${array[i].name}${qtd(array, i)}`
    } else {
      if (i === array.length - 1) {
        aux += ` e ${array[i].name}${qtd(array, i)}`
      } else {
        aux += `, ${array[i].name}${qtd(array, i)}`
      }
    }
  }
  return aux
}

const price = obj => {
  let mainCourse = 0
  for (let item of obj.mainCourse) {
    mainCourse += Number(item.price.replace(',', '.')) * item.qtd
  }

  let drink = 0
  for (let item of obj.drink) {
    drink += Number(item.price.replace(',', '.')) * item.qtd
  }

  let dessert = 0
  for (let item of obj.dessert) {
    dessert += Number(item.price.replace(',', '.')) * item.qtd
  }

  return mainCourse + drink + dessert
}

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

    const mainCourse = request(user.mainCourse)
    const drink = request(user.drink)
    const dessert = request(user.dessert)

    const message = window.encodeURIComponent(
      `Olá, gostaria de fazer o pedido:\n- Prato: ${mainCourse}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${price(
        user
      )
        .toFixed(2)
        .toString()
        .replace('.', ',')}`
    )
    window.open(`https://wa.me/+5518999999999?text=${message}`)
  }

  return (
    <Container>
      <Content>
        <Button state={state()} onClick={toSend}>
          {button()}
        </Button>
      </Content>
    </Container>
  )
}
