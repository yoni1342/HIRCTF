import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage'
import AboutPage from './page/About/AboutCompany'
import Consulting from './page/ConsultingPage'
import ProjectManagment from './page/ProjectManagmentPage'
import Projects from './page/Projects'
import Blogs from './page/BlogsPage'
import Blog from './page/blog/'
import History from './page/About/History'
import AboutClient from './page/About/AboutClient'
import ResearchPage from './page/ResearchPage'
import Footer from './components/Footer';
import Training from './page/Training'
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/about/company' element={<AboutPage />}></Route>
      <Route path='/services/consultancy' element={<Consulting />}></Route>
      <Route path='/services/research' element={<ResearchPage />}></Route>
      <Route path='/services/training' element={<Training />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
      <Route path='/blogs/:id' element={<Blog />}></Route>
      <Route path='/about/history' element={<History />}></Route>
      <Route path='/about/clients' element={<AboutClient />}></Route>
      
    </Routes>
  );
}

export default App;
