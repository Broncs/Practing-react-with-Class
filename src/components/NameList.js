import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['bruce', 'clark', 'diana'];

  const people = [
    {
      id: 1,
      name: 'Diana',
      age: 28,
      skill: 'laço',
    },
    {
      id: 2,
      name: 'batman',
      age: 28,
      skill: 'laço',
    },
  ];
  return (
    <div>
      {names.map((name, index) => (
        <h2 key={index}>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;
const names = ['bruce', 'clark', 'diana'];
