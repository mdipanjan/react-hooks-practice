import React, { useState } from "react";

function HookExampleFour() {
  const [num, setNum] = useState([]);
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  console.log(makeid(5));
  return (
    <div>
      <button
        onClick={() => {
          setNum([
            ...num,
            {
              id: makeid(5),
              name: makeid(10),
            },
          ]);
        }}
        className="btn btn-success my-5"
      >
        Add New Value
      </button>
      <ul>
        {num.map((itm) => {
          return <li key={itm.id}>{itm.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default HookExampleFour;
