import React from "react";

export default function SideBar(props) {
  const { handleModal, data } = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={() => handleModal()}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
          <p className="descriptionTitle">{data?.date}</p>
          <p className="descriptionContainer"> 
            {data?.explanation}
          </p>
        </div>
        <button onClick={() => handleModal()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
