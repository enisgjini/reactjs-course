import React, { useState } from "react";

const State = () => {
  const gjendjaFillestare = () => 1;
  const [vlera, ndryshimiVleres] = useState(gjendjaFillestare);

  return (
    <>
      <p>{vlera}</p>
      <button onClick={() => ndryshimiVleres(vlera + 1)}>Rrit vleren</button>
    </>
  );
};

export default State;
