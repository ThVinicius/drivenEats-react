import '../assets/css/reset.css'
import GlobalStyle from '../assets/css/GlobalStyle'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Content/Main/Main'
import { AuthProvider } from '../provider/UserContext'

export default function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </AuthProvider>
    </>
  )
}
