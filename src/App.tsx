import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Login from "./pages/login/index";
import ForgetPassword from "./pages/forgetPassword/index";
import FilterPage from "./pages/FilterPage/index";
import NewPass from "./pages/NewPass/index";
import RegisterUser from "./pages/RegisterUser/index";
import MyAccount from "./pages/MyAccount/index";
import RegisterCar from "./pages/RegisterCar/index";
//import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/filter-page" element={<FilterPage/>}/>
        <Route path="/new-pass" element={<NewPass/>}/>
        <Route path="/register-user" element={<RegisterUser/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/register-car" element={<RegisterCar/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App;