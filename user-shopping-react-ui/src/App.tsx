import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import SignUpForm from './pages/signup-forms/sigin-up-form'
import Login from './pages/login-form/login';
import Homepage from './pages/home-page/home-page';
import ProtectedRoutes from './components/procted-routes/protected-routes';

function App() {

  return <>
  <div className='app'>
  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUpForm/>} />
      <Route path='/login' element={ <Login /> } />
      <Route element={<ProtectedRoutes/>}>
      <Route path='/' element={<Homepage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  </>
}

export default App
