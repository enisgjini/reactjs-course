import React from "react";

function MyProducts({ emri_i_produktit, pershkrimi, qmimi }) {
  return (
    <div>
      <h1>{emri_i_produktit}</h1>
      <p>{pershkrimi}</p>
      <p>{qmimi}</p>
    </div>
  );
}

export default MyProducts;
