import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Profil from '../pages/Profil';

const index = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default index;