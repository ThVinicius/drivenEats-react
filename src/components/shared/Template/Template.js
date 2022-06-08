import { useState, useContext } from 'react'
import { UserContext } from '../../../provider/UserContext'
import { Container, Amount } from './style'

const verify = (user, setUser) => {
  if (
    user.mainCourse === null ||
    user.drink === null ||
    user.dessert === null
  ) {
    return
  }
  setUser({ ...user, button: true })
}

export default function Template({ image, name, description, price, type }) {
  const { user, setUser } = useContext(UserContext)
  const [count, setCount] = useState(0)

  const amount = math => {
    if (math === 'plus') {
      setCount(count + 1)
    }
    if (math === 'minus') {
      setCount(count - 1)
      if (count === 1) {
        setUser({ ...user, button: false })
      }
    }
  }

  const selected = () => {
    if (count === 0) return 'none'
    return '5px solid #32B72F'
  }

  const icon = () => {
    if (count === 0) return
    return (
      <Amount>
        <h1 onClick={() => amount('minus')}>-</h1>
        <h2>{count}</h2>
        <h4 onClick={() => amount('plus')}>+</h4>
      </Amount>
    )
  }

  const disableClick = () => {
    if (count !== 0) return

    switch (true) {
      case type === 'mainCourse':
        user.mainCourse = [{ name: name, price: price, qtd: 1 }]
        break

      case type === 'drink':
        user.drink = [{ name: name, price: price, qtd: 1 }]
        break

      case type === 'dessert':
        user.dessert = [{ name: name, price: price, qtd: 1 }]
        break

      default:
        break
    }

    verify(user, setUser)
    return setCount(1)
  }
  console.log(user)
  return (
    <Container border={selected()} onClick={() => disableClick()}>
      <div>
        <img src={image} alt={name} />
        <h6>{name}</h6>
        <p>{description}</p>
        <div>
          <h5>R$ {price}</h5>
          {icon()}
        </div>
      </div>
    </Container>
  )
}
