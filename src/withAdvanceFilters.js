import React, { useState } from "react";
export default function withAdvanceFilter(Componet, config) {
  return function ComponentWithAdvanceLogics(props) {
    const [heading, setHeading] = useState("heading1");
    const checkoutCall = () => {
      console.log("call");
      setHeading("call");
    };
    const propsData = {
      ...props,
      heading,

      checkoutCall
    };
    return <Componet {...propsData} />;
  };
}
