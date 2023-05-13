import './App.sass'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/work' element={ <Work /> } />
      <Route path='/contact' element={ <Contact /> } />
    </Routes>
    </>
  )
}

export default App
