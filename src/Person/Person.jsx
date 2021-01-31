import React from 'react';

import './Person.css';

const Person = ({ name, age, click, changed }) => {
  return (
    <div className='Person'>
      <h2 onClick={click}>
        I am a {name} and i am {age} years old
      </h2>
      <input type='text' onChange={changed} />
    </div>
  );
};

export default Person;
