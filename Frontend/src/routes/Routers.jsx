import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import  Contact from '../pages/Contact'
import  Signup from '../pages/Signup'
import Login from '../pages/Login'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctarDetails'
import {Routes, Route} from 'react-router-dom'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import CheckoutSuccess from '../pages/CheckoutSuccess'
import ProtectedRoute from './ProtectedRoutes'




 const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctors/:id" element={<DoctorDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/Checkout-success" element={<CheckoutSuccess/>} />
    <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient", "admin"]}>
            < MyAccount/>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
    
  </Routes>
};

export default Routers;
