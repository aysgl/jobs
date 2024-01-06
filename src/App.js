import React from 'react'
import '../src/scss/style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Joblist from './pages/Joblist';
import AddJob from './pages/AddJob';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Joblist />} />
        <Route path='/list' element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;