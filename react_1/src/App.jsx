import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar items={['Home', "About", "Contant"]}/>
    <Cover/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
