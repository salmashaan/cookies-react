import React from "react";
import cookiesData from "../Cookies";
import Cookie from "./Cookie";

export default function CookiesList() {
  const cookieList = cookiesData.map((cookie) => (
    <Cookie cookieData={cookie} />
  ));

  return <div className="cookies-list"> {cookieList} </div>;
}
