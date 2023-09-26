import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Headphones from './routes/Headphones/Headphones'
import Home from './routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Speakers from './routes/Speakers/Speakers'
import Earphones from './routes/Earphones/Earphones'
import Checkout from './routes/Checkout/Checkout'
import Product from './routes/Product/Product'
import NotFound from './routes/NotFound/NotFound'
import './App.css'

const routes = [
  {
    path: '/headphones',
    component: <Headphones />
  },
  {
    path: '/speakers',
    component: <Speakers />
  },
  {
    path: '/earphones',
    component: <Earphones />
  }
]

function App() {
  return (
    <>

      <Header />
      
      <Routes>

        <Route path='/' element={<Home />} />

        {routes.map((route, idx) => (
          <Route path={route.path} key={idx}>

            <Route index element={route.component} />

            <Route path=':product' element={<Product />} />
          
          </Route>
        ))}

        <Route path='/checkout' element={<Checkout />} />

        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
