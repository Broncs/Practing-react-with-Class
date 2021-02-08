import React from 'react';

const Columns = () => {
  const items = [];
  return (
    //  cannot pass key  in shorthand
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Jhonatan</td>
    </>
  );
};

export default Columns;
