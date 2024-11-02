import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {
  const navigate = useNavigate();
  const handelButton = () => {
    navigate('/Coffees');
  };
  // const [CoffeeData, setCoffeeData] = useState([]);
  const data = useLoaderData();
  const { categories } = useParams();
  console.log(categories);
  console.log(data);

  // useEffect(() => {
  //   if (categories) {
  //     const filterByCoffee = [...data].filter(
  //       (item) => item.categories === categories,
  //     );
  //     setCoffeeData(filterByCoffee);
  //   } else {
  //     setCoffeeData(data)
  //   }
  // }, [categories, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {data.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <button onClick={handelButton} className="btn btn-warning">
        view more
      </button>
    </div>
  );
};

export default CoffeeCard;
