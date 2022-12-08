import Destaques from '../components/Destaques'
import Header from '../components/Header'
import Produtos from '../components/Produtos'
import Footer from '../components/Footer'
import '../index.css'

export default function Root() {
  return (
    <>
      <Header />
      <Destaques />
      <Produtos />
      <Footer />
    </>
  )
}
