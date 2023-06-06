import React from "react";

const Cards = ({ item }) => {
  return (
    <div
      style={{
        background: "lightgreen",
        display: "inline-block",
        borderRadius: ".5rem",
        padding: "3rem",
        margin: "3px",
        borderWidth: ".25rem",
        boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.2)",
        width: "15%",
        height: "230px",
      }}
    >
      {/* <h1>RoboFriends</h1> */}
      <img src={require("./images/41J.png")} alt="" />
      <div>
        <h3 style={{ textAlign: "center" }}>{item.name}</h3>
        <p style={{ textAlign: "center" }}> {item.email}</p>
      </div>
    </div>
  );
};

export default Cards;
