import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import SignUpForm from './pages/signup-forms/sigin-up-form'
import Login from './pages/login-form/login';

function App() {

  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUpForm/>} />
      <Route path='/login' element={ <Login /> } />
    </Routes>
  </BrowserRouter>
  </>
}

export default App
