import MainCourse from '../MainCourse/MainCourse'
import Drink from '../Drink/Drink'
import Dessert from '../Dessert/Dessert'
import { Container } from './style'

export default function Main() {
  return (
    <Container>
      <MainCourse />
      <Drink />
      <Dessert />
    </Container>
  )
}
