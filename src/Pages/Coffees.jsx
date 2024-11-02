import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';
const Coffees = () => {
  const [Coffee, setCoffee] = useState([]);
  const data = useLoaderData();
  const handleSort = (sortBy) => {
    if (sortBy == 'popularity') {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffee(sorted);
    }
    if (sortBy == 'rating') {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffee(sorted);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className="space-x-4 space-y-2">
          <button
            onClick={() => handleSort('popularity')}
            className="btn btn-warning"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort('rating')}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {Coffee.map((item) => (
          <Card key={item.id} coffee={item} />
        ))}
      </div>
    </div>
  );
};

export default Coffees;
