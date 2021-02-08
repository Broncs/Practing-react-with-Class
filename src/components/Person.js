import React from 'react';

function Person({ person }) {
  return (
    <div>
      i'm {person.name}, my skill , {person.skill}
    </div>
  );
}

export default Person;
