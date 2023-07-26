import './App.sass'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import About from '../About/About'
import BadURL from '../ErrorHandling/BadURL'
import UnderConstruction from '../ErrorHandling/UnderConstruction'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' index element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/work' element={ <Work /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/*' element={<BadURL />} />
      <Route path='/underConstruction' element={<UnderConstruction />} />
    </Routes>
    </>
  )
}

export default App
