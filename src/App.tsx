import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Navbar from 'components/Navbar';
import Home from './pages/Home';
import Login from "./pages/login/index";
import ForgetPassword from "./pages/forgetPassword/index";
//import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App;