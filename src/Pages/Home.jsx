import React from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import Heading from '../Components/Heading';
import Hero from '../Components/Hero';

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Hero />

      {/* Heading */}
      <Heading
        title="Browse Coffees by Category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
