import React from "react";

export default function Kushtezimi(props) {
  const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return (
  //       <div>
  //         <PershendetjePerPerdoruesin />
  //       </div>
  //     );
  //   }
  //   {
  //     return (
  //       <div>
  //         <PershendetjePerMysafirin />
  //       </div>
  //     );
  //   }
  return (
    <>
      Përdoruesi <b>{isLoggedIn ? "aktualisht" : "nuk"}</b> është i regjistruar
    </>
  );
}

function PershendetjePerPerdoruesin(props) {
  return (
    <>
      <h1>Mirë se vjen përseri</h1>
    </>
  );
}

function PershendetjePerMysafirin(props) {
  return (
    <>
      <h1>Ju lutemi regjistrohuni</h1>
    </>
  );
}
