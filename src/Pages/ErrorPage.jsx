import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-bold text-red-600 animate-bounce">404</h1>
      <h2 className="text-4xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you're looking for doesn't exist. It might have been removed or
        moved to a different location.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
