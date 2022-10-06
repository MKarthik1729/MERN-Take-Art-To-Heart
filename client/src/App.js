import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Admin from './components/Admin/admin';
import './styles/app.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User/user'
import {UserProvider} from './context/Context'
import DumReg from './DumReg'
function App() {
  return (
    <UserProvider >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />}/>
        <Route path='user' element={<User />} />
        <Route path='admin' element = {<Admin />} />
        <Route path='dumreg' element={<DumReg />} />
      </Routes>
      </BrowserRouter>

    </ UserProvider>
  );
}

export default App;
