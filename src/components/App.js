import coca from '../assets/images/coquinha_gelada 1.png'
import fanta from '../assets/images/fanta uva.png'
import frango from '../assets/images/frango_yin_yang 1.png'
import guarana from '../assets/images/guarana.jpeg'
import lasanha from '../assets/images/lasanha.jpeg'
import pave from '../assets/images/pave.jpeg'
import pizza from '../assets/images/pizza.jpeg'
import pudim from '../assets/images/pudim 1.png'
import ratatouille from '../assets/images/ratatouille.jpeg'
import sorvete from '../assets/images/sorvete.jpeg'
import laranja from '../assets/images/suco de laranja.jpg'
import sushi from '../assets/images/sushi.jpg'
import torta from '../assets/images/torta.jpeg'
import '../assets/css/reset.css'
import '../assets/css/style.css'

export default function App() {
  return (
    <>
      {/* topo */}
      <div className="fixar">
        <div className="topo">
          <div>
            <h1 className="font-righteous">DrivenEats</h1>
            <h2 className="font-roboto">Sua comida em 6 minutos</h2>
          </div>
        </div>
      </div>
      {/* topo */}
      <div className="container">
        {/*<!------------Prato------------->*/}
        <div>
          <div>
            <h3 className="font-righteous">Primeiro, seu prato</h3>
          </div>
          <div className="ajustar-cardapio">
            <div onclick="selecionarPrato(this)">
              <div>
                <img src={frango} />
                <h6 className="nome-alimento">Frango Yin Yang</h6>
                <p className="descricao">
                  Um pouco de batata, um pouco de salada
                </p>
                <div>
                  <h5 className="preco">R$ 14,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div onclick="selecionarPrato(this)">
              <div>
                <img src={pizza} />
                <h6 className="nome-alimento">Pizza</h6>
                <p className="descricao">Pizza grande sabor portuguesa</p>
                <div>
                  <h5 className="preco">R$ 35,50</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div onclick="selecionarPrato(this)">
              <div>
                <img src={lasanha} />
                <h6 className="nome-alimento">Lasanha</h6>
                <p className="descricao">Mussarela, presunto e carne moida</p>
                <div>
                  <h5 className="preco">R$ 9,99</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div onclick="selecionarPrato(this)">
              <div>
                <img src={ratatouille} />
                <h6 className="nome-alimento">Ratatouille</h6>
                <p className="descricao">
                  Legumes cozidos: abobrinha, berinjela e tomate.
                </p>
                <div>
                  <h5 className="preco">R$ 11,99</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div onclick="selecionarPrato(this)">
              <div>
                <img src={sushi} />
                <h6 className="nome-alimento">Sushi</h6>
                <p className="descricao">Arroz, salmão e shoyu.</p>
                <div>
                  <h5 className="preco">R$ 37,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!------------Prato------------->*/}

        {/*<!------------Bebida------------->*/}
        <div>
          <div>
            <h3 className="font-righteous">Agora, sua bebida</h3>
          </div>
          <div className="ajustar-cardapio procura">
            <div className="bebida" onclick="selecionarBebida(this)">
              <div>
                <img src={coca} />
                <h6 className="nome-alimento">Coquinha gelada</h6>
                <p className="descricao">Lata 350ml</p>
                <div>
                  <h5 className="preco">R$ 4,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className="bebida" onclick="selecionarBebida(this)">
              <div>
                <img src={fanta} />
                <h6 className="nome-alimento">Fanta uva</h6>
                <p className="descricao">Lata 350ml</p>
                <div>
                  <h5 className="preco">R$ 5,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className="bebida" onclick="selecionarBebida(this)">
              <div>
                <img src={guarana} />
                <h6 className="nome-alimento">Guaraná</h6>
                <p className="descricao">Lata 350ml</p>
                <div>
                  <h5 className="preco">R$ 5,00</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className="bebida" onclick="selecionarBebida(this)">
              <div>
                <img src={laranja} />
                <h6 className="nome-alimento">Suco de laranja, 500mL</h6>
                <p className="descricao">Natural, 100% laranja</p>
                <div>
                  <h5 className="preco">R$ 7,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!------------Bebida------------->*/}
        {/*<!------------Sobremesa------------->*/}
        <div>
          <div>
            <h3 className="font-righteous">Por fim, sua sobremesa</h3>
          </div>
          <div className="ajustar-cardapio">
            <div className="sobremesa" onclick="selecionarSobremesa(this)">
              <div>
                <img src={pudim} />
                <h6 className="nome-alimento">Pudim</h6>
                <p className="descricao">Apenas pudim</p>
                <div>
                  <h5 className="preco">R$ 7,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className="sobremesa" onclick="selecionarSobremesa(this)">
              <div>
                <img src={sorvete} />
                <h6 className="nome-alimento">Sorvete</h6>
                <p className="descricao">2L, sabor napolitano</p>
                <div>
                  <h5 className="preco">R$ 14,90</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className="sobremesa" onclick="selecionarSobremesa(this)">
              <div>
                <img src={pave} />
                <h6 className="nome-alimento">Pavê de chocolate</h6>
                <p className="descricao">
                  Biscoite de maisena, cremede leite e ovos
                </p>
                <div>
                  <h5 className="preco">R$ 9,99</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className="sobremesa" onclick="selecionarSobremesa(this)">
              <div>
                <img src={torta} />
                <h6 className="nome-alimento">Torta</h6>
                <p className="descricao">Torda de limão</p>
                <div>
                  <h5 className="preco">R$ 37,60</h5>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!------------Sobremesa------------->*/}
      </div>
      {/*<!------------Finalizar------------->*/}
      <div className="fixar-finalizar">
        <div className="finalizar">
          <div className="espera">
            Selecione os 3 itens para fechar o pedido
          </div>
          <div className="enviar escondido">
            <button onclick="confirmarPedido()">Fechar pedido</button>
          </div>
        </div>
      </div>
      {/*<!------------Finalizar------------->*/}
    </>
  )
}
