import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <button
        className="border border-black m-1 p-1 bg-slate-200"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="border border-black m-1 p-1 bg-slate-200"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>
      <button
        className="border border-black m-1 p-1 bg-slate-200"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <h1>Count : {count}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : akshaymarch7</h4>
    </div>
  );
};

export default User;
