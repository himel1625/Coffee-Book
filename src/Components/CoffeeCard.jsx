import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
const CoffeeCard = () => {
  const navigate = useNavigate();

  const data = useLoaderData();
  const [CoffeeData, setCoffeeData] = useState([]);
  const { categories } = useParams();
  useEffect(() => {
    if (categories) {
      const filterByCoffee = [...data].filter(
        (item) => item.category === categories,
      );
      setCoffeeData(filterByCoffee);
    } else {
      setCoffeeData(data);
    }
  }, [categories, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {CoffeeData.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <button onClick={() => navigate('/Coffees')} className="btn btn-warning">
        view All
      </button>
    </div>
  );
};

export default CoffeeCard;
