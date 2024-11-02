import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center my-12">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xs md:text-base text-gray-600 text-center font-bold">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Heading;
