import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}disabled={count === 0}>Decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      <h1>Count : {count}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : akshaymarch7</h4>
    </div>
  );
};

export default User;
