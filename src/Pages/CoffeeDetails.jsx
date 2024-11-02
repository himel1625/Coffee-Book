import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        inventore fugiat tempora culpa dolorum nostrum assumenda laudantium
        maiores quibusdam harum delectus sed ducimus facilis natus ab, aperiam
        quas adipisci doloremque eos incidunt fugit id neque! Repellat ex
        placeat rerum unde quam blanditiis totam quod et quibusdam, veritatis
        enim necessitatibus fugiat ad maiores perferendis! Fuga voluptate
        commodi id nobis suscipit ut excepturi similique laborum temporibus nam
        at, nulla voluptatibus voluptates numquam expedita, iure incidunt, porro
        provident fugit beatae minus reiciendis impedit. Exercitationem quo
        doloremque inventore, perferendis eos laborum at quae quas aspernatur
        beatae perspiciatis totam expedita itaque, provident adipisci rerum
        facilis!
      </p>
    </div>
  );
};

export default CoffeeDetails;
