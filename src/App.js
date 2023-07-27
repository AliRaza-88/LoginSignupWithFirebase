import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Home from './pages/Home';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<ProtectedRoute component={About}/>}  />
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/register' element={<Signuppage/>}/>
    </Routes>
    
    </>
  );
}

export default App;
