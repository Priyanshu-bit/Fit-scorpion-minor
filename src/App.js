import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

import Footer from './components/Footer';
import Login from "./components/Login";
import Navbar from './components/Navbar';
import BmiCalculator from './components/BmiCalculator';


const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar/>
    <Login/>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/" element={<Login />} />
      <Route path="/calculators/bmi" element ={<BmiCalculator/>} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
