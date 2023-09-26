import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Headphones from './routes/Headphones/Headphones'
import Home from './routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Speakers from './routes/Speakers/Speakers'
import Earphones from './routes/Earphones/Earphones'

function App() {
  return (
    <>

      <Header />
      
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/headphones' element={<Headphones />} />

        <Route path='/speakers' element={<Speakers />} />

        <Route path='/earphones' element={<Earphones />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
