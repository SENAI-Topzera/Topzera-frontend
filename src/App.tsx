import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from "./pages/login/index";
import ForgetPassword from "./pages/forgetPassword/index";
import FilterPage from "./pages/FilterPage/index";
import NewPass from "./pages/NewPass/index";
import RegisterUser from "./pages/RegisterUser/index";
import MyAccount from "./pages/MyAccount/index";
import RegisterCar from "./pages/RegisterCar/index";
import MyCars from "pages/MyCars/index";
import AcceptDecline from 'pages/AcceptDecline/index';
import RatingRental from 'pages/RatingRental';
import RatingRentalCar from 'pages/RatingRentalCar';
import SelectedCar from 'pages/SelectedCar';
import HomePage from 'pages/HomePage';
import EditCnh from 'pages/EditCnh';
import EditUser from 'pages/EditUser';
import EditAddress from 'pages/EditAddress';
//import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/filter-page" element={<FilterPage />}/>
        <Route path="/car-detail/:id" element={<SelectedCar />}/>
        <Route path="/new-pass" element={<NewPass />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/register-car" element={<RegisterCar />} />
        <Route path="/my-cars" element={<MyCars />} />
        <Route path="/accept-decline" element={<AcceptDecline />} />
        <Route path="/rating-rental" element={<RatingRental />} />
        <Route path="/rating-rental-car" element={<RatingRentalCar />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-cnh" element={<EditCnh />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/edit-address" element={<EditAddress />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;