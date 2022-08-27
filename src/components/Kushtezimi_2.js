import React from "react";

export default function Kushtezimi_2(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>Ju keni {unreadMessages.length} mesazhe të palexuara</h2>
      )}
    </>
  );
}
