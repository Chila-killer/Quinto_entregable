import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonInfo from './pages/PokemonInfo'
import PrivateRoutes from './components/PrivateRoutes'
import Config from './pages/Config'


function App() {

  return (
    <div className='font-sans'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/config' element={<Config />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonInfo />} />
        </Route>
      </Routes>
      <div className="w-screen h-screen fixed top-0 dark:bg-blue-950/50"></div>
    </div>
  )
}

export default App
