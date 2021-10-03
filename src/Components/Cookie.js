import React from "react";

export default function Cookie(props) {
  return (
    <div className="cookie">
      <img src={props.cookieData.image} />
      <h5>{props.cookieData.name}</h5>
      <p>{props.cookieData.price} KD</p>
    </div>
  );
}
