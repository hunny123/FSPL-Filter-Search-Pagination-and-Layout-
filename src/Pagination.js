import React from "react";
export default function Pagination(props) {
  console.log(props);
  //here we write page no and pagenation change fucntions
  return <div className="App">{props.page}</div>;
}
