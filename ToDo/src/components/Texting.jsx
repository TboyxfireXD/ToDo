import React, { useEffect, useState } from "react";

const Texting = () => {
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("component mounted");

    return () => {
        console.log("component unmounted")
    };
  }, []);

  return (
    <div>
      <input type="text" onChange={changeText} />
      <h1>{text}</h1>
    </div>
  );
};

export default Texting;
