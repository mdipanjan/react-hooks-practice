import React, { useState } from "react";

function HookExampleThreee() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <form>
        <div className="mt-5">
          <input
            onChange={(e) => setValue({ ...value, firstName: e.target.value })}
            type="text"
          />
        </div>
        <div className="my-2">
          <input
            onChange={(e) => setValue({ ...value, lastName: e.target.value })}
            type="text"
          />
        </div>
        <h5>{JSON.stringify(value)}</h5>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(value);
          }}
          className="btn btn-primary"
        >
          show state
        </button>
      </form>
    </div>
  );
}

export default HookExampleThreee;
