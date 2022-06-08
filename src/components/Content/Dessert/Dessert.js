import Template from '../../shared/Template/Template'
import pave from '../../../assets/images/pave.jpeg'
import pudim from '../../../assets/images/pudim 1.png'
import sorvete from '../../../assets/images/sorvete.jpeg'
import torta from '../../../assets/images/torta.jpeg'
import { Container, Title } from '../MainCourse/style'

const dessert = [
  { name: 'Pudim', image: pudim, description: 'Apenas pudim', price: '7,90' },
  {
    name: 'Sorvete',
    image: sorvete,
    description: '2L, sabor napolitano',
    price: '14,90'
  },
  {
    name: 'Pavê de chocolate',
    image: pave,
    description: 'Biscoite de maisena, cremede leite e ovos',
    price: '9,99'
  },
  { name: 'Torta', image: torta, description: 'Torda de limão', price: '37,60' }
]

export default function Dessert() {
  return (
    <div>
      <div>
        <Title>Primeiro, seu prato</Title>
      </div>
      <Container>
        {dessert.map((item, index) => (
          <Template
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            type="dessert"
          />
        ))}
      </Container>
    </div>
  )
}
