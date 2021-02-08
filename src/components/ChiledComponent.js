import React from 'react';

function ChiledComponent({ greetHandler }) {
  return (
    <div>
      <button onClick={() => greetHandler('child')}>Greet parent</button>
    </div>
  );
}

export default ChiledComponent;
