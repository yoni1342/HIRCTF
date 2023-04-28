import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage'
import AboutPage from './page/AboutPage'
import Consulting from './page/ConsultingPage'
import ProjectManagment from './page/ProjectManagmentPage'
import Projects from './page/Projects'
import Blogs from './page/BlogsPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/services/Consultancy' element={<Consulting />}></Route>
      <Route path='/services/Projectmanagment' element={<ProjectManagment />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
    </Routes>
  );
}

export default App;
