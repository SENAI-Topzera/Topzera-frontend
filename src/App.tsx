import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./pages/login/index";
import Home from "./pages/Home/index";
import ForgetPassword from "./pages/forgetPassword/index";



function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App;
