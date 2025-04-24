import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import Works from './Component/Works/Works'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Works />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


