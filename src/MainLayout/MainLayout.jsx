import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
