import React from "react";

function Cookie(props) {
  return (
    <div className="cookie">
      <img src={props.info.image} />
      <h5>{props.info.name}</h5>
      <p>{props.info.price} KD</p>
    </div>
  );
}

export default Cookie;
