import React from "react";

export default function Footer(props) {
  const { handleModal, data } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={() => handleModal()}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
