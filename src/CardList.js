import React from "react";
import Cards from "./Cards";

const CardList = ({robots}) => {

    
  return (
    <div
      style={{
        display: "flex",
        alignItems:'center',
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        overflow: 'hidden',
      }}
    >
      {robots.map((item, i) => (
        <Cards item={item} key={i} />
      ))}
    </div>
  );
};

export default CardList;
