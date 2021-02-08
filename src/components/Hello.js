import React from 'react';

const Hello = ({ name, heroname, children }) => {
  return (
    <div>
      <h1>
        hello {name} a.k.a {heroname}
      </h1>
      {children}
    </div>
  );
};

export default Hello;
