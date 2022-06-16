import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Pricing from '../pages/Pricing';
import Home from './Home';

import Products from '../pages/Products';
import Getdemo from '../pages/Getdemo';
import PrivateRoutes from './router/PrivateRoutes'
import Login from './Auth/Login';
import LoginHome from './LoginHome/LoginHome';


const Allroutes = () => {
  
  return (
    <div>
      <Navbar />
      
      <Routes>
      <Route path = "/" element ={<Home/>}/>
        <Route path='/Calender' element={<Calendar />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path ="/getdemo" element = {<Getdemo/>}/>
      
        <Route path='/login' element={<Login/>}/>
        <Route path = "/Product" element={<Products/>}/>
        <Route path = "/loginhome" element={<LoginHome/>}/>
        <Route path = "/privateroutes" element = {<PrivateRoutes/>}/>
        
      </Routes>
      <Box></Box>
      <h2 style={{ marginTop: '50px' }}>
        <Footer />
      </h2>
    </div>
  );
};

export default Allroutes;