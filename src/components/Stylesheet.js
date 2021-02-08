import React from 'react';
import './myStyles.css';

function Stylesheet({ primary }) {
  return (
    <div>
      <h1 className={`font-xl ${primary ? 'primary' : ''}`}>styleSHeet</h1>
    </div>
  );
}

export default Stylesheet;
