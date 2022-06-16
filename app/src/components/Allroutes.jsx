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

import SignInForm from '../pages/SignInForm';
import SignUpForm from '../pages/SignUpForm';



const Allroutes = () => {
  
  return (
    <div>

      <div style={{marginBottom : "200px"}}>
      <Navbar/>
      </div>
      
      <Routes>
      <Route path = "/" element ={<Home/>}/>
        <Route path='/Calender' element={<Calendar />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path ="/getdemo" element = {<Getdemo/>}/>
      
        <Route path='/login' element={<SignInForm/>}/>
        <Route path = "/Product" element={<Products/>}/>
        <Route path = "/login/signup"  element ={<SignUpForm/>}/>
        
        
      </Routes>
      <Box></Box>
      <h2 style={{ marginTop: '50px' }}>
        <Footer />
      </h2>
    </div>
  );
};

export default Allroutes;