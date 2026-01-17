import './App.css'
import Header from './Components/Header'
import Section from './Components/section'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import {BrowserRouter} from 'react-router-dom'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Section/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App