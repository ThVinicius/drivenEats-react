import coca from '../../../assets/images/coquinha_gelada 1.png'
import fanta from '../../../assets/images/fanta uva.png'
import guarana from '../../../assets/images/guarana.jpeg'
import laranja from '../../../assets/images/suco de laranja.jpg'
import Template from '../../shared/Template/Template'
import { Container, Title } from '../MainCourse/style'

const drink = [
  {
    name: 'Coquinha gelada',
    image: coca,
    description: 'Lata 350ml',
    price: '4,90'
  },
  {
    name: 'Fanta uva',
    image: fanta,
    description: 'Lata 350ml',
    price: '5,90'
  },
  {
    name: 'Guaraná',
    image: guarana,
    description: 'Lata 350ml',
    price: '5,00'
  },
  {
    name: 'Suco de laranja, 500mL',
    image: laranja,
    description: 'Natural, 100% laranja',
    price: '7,90'
  }
]

export default function Drink() {
  return (
    <div>
      <div>
        <Title>Agora, sua bebida</Title>
      </div>
      <Container>
        {drink.map((item, index) => (
          <Template
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            type="drink"
          />
        ))}
      </Container>
    </div>
  )
}
