import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Heading from '../Components/Heading';
import { getallFavorite, removeFavorite } from '../utilities/LocalStorage';

const Dashboard = () => {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    const Favorite = getallFavorite();
    setCoffee(Favorite);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const Favorite = getallFavorite();
    setCoffee(Favorite);
  };
  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-1">
        {coffee.map((coffee) => (
          <Card key={coffee.id} handleRemove={handleRemove} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
