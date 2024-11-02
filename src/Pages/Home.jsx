import React from 'react';
import Hero from '../Components/Hero';
import Heading from '../Components/Heading';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Heading */}
      <Heading
        title='Browse Coffees by Category'
        subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'
      />
     
    </div>
  );
};

export default Home;
