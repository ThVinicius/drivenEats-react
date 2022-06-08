import frango from '../../../assets/images/frango_yin_yang 1.png'
import lasanha from '../../../assets/images/lasanha.jpeg'
import pizza from '../../../assets/images/pizza.jpeg'
import ratatouille from '../../../assets/images/ratatouille.jpeg'
import sushi from '../../../assets/images/sushi.jpg'
import Template from '../../shared/Template/Template'
import { Container, Title } from './style'

const mainCourse = [
  {
    name: 'Frango Yin Yang',
    image: frango,
    description: 'Um pouco de batata, um pouco de salada',
    price: '14,90'
  },
  {
    name: 'Lasanha',
    image: lasanha,
    description: 'Mussarela, presunto e carne moida',
    price: '9,99'
  },
  {
    name: 'Pizza',
    image: pizza,
    description: 'Legumes cozidos: abobrinha, berinjela e tomate.',
    price: '35,50'
  },
  {
    name: 'Ratatouille',
    image: ratatouille,
    description: 'Um pouco de batata, um pouco de salada',
    price: '11,99'
  },
  {
    name: 'Sushi',
    image: sushi,
    description: 'Arroz, salmão e shoyu.',
    price: '37,90'
  }
]

export default function MainCourse() {
  return (
    <div>
      <div>
        <Title>Primeiro, seu prato</Title>
      </div>
      <Container>
        {mainCourse.map((item, index) => (
          <Template
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            type="mainCourse"
          />
        ))}
      </Container>
    </div>
  )
}
