import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
  return (
    <div>
      {/* Same as */}
      <Navbar />
      <div className="min-h-[calc(100vh-232px)] py-12 container lg:max-w-[1440px] w-full sm:w-full mx-auto sm:mx-auto scroll-smooth px-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
