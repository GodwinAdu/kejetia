import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Login'
import Record from './components/Record'
import Service from './components/Service'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast';




function App() {

  return (
    <>
        <Toaster />
        <Routes>
          <Route path='/*' element ={ <Login /> }/>
          <Route path='home' element = { <Home /> }/>
          <Route path='record' element = { <Record /> }/>
          <Route path='service' element = { <Service /> }/>
        </Routes>
 
    </>
  )
}

export default App
