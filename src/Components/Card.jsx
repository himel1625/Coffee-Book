import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { id, image, name, category, type, origin, rating, popularity } =
    coffee || {};
  return (
    <div>
      <div className="flex relative gap-6">
        <Link
          to={`/coffee/${id}`}
          className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
        >
          <figure className="w-full h-48 overflow-hidden">
            <img className="" src={image} alt="" />
          </figure>
          <div className="p-4">
            <h1 className="text-xl">Name: {name}</h1>
            <p>Category: {category}</p>
            <p>Type: {type}</p>
            <p>Origin: {origin}</p>
            <p>Rating: {rating}</p>
            <p>Popular: {popularity}</p>
          </div>
        </Link>
        {pathname === '/Dashboard' && (
          <div
            onClick={() => handleRemove(id)}
            className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
          >
            <FaTrashAlt size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
