import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


