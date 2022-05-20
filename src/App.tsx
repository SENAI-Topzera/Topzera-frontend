import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Login from "./pages/login/index";
import ForgetPassword from "./pages/forgetPassword/index";
import FilterPage from "./pages/FilterPage/index";
import NewPass from "./pages/NewPass/index";
import RegisterUser from "./pages/RegisterUser/index";
import MyAccount from "./pages/MyAccount/index";
//import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/filterPage" element={<FilterPage/>}/>
        <Route path="/newPass" element={<NewPass/>}/>
        <Route path="/register-user" element={<RegisterUser/>}/>
        <Route path="/myAccount" element={<MyAccount/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App;