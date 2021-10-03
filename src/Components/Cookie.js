import React from "react";

export default function Cookie(props) {
  return (
    <div className="cookie">
      <img class="cookie-img" src={props.cookieData.image} />
      <h5 class="cookie-name">{props.cookieData.name}</h5>
      <p class="cookie-price">{props.cookieData.price} KD</p>
    </div>
  );
}
