import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import UseParams from './Components/UseParams'
import GitHub, { githubInfoLoader } from './Components/GitHub'

function App() {

  return (
    <div className='w-full'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/useParams/:userId' element={<UseParams />}/>
        <Route path='/github' element={<GitHub />} 
        />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
