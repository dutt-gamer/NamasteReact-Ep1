//import React, { useState } from "react";

const Contact = () => {
  // const [input, SetInput] = useState("");
  // const [todos, SetTodos] = useState([]);

  // const addTodo = () => {
  //   if (input.trim() === "") {
  //     alert("Please enter a todo");
  //     return;
  //   }
  //   const item = {
  //     id: todos.length + 1,
  //     text: input.trim(),
  //     completed: false,
  //   };
  //   SetTodos((prev) => [...prev, item]);
  //   SetInput("");
  // };

  // const toggleCompleted = (id) => {
  //   SetTodos(
  //     todos.map((t) => {
  //       if (t.id === id) {
  //         return {
  //           ...t,
  //           completed: !t.completed,
  //         };
  //       } else {
  //         return t;
  //       }
  //     })
  //   );
  // };

  // const deleteTodo = (id) => {
  //   SetTodos(todos.filter((t) => t.id !== id));
  // };

  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        ></input>
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
      {/* <input
        className="m-2 p-2 border border-black"
        type="text"
        value={input}
        placeholder="Enter todo"
        onChange={(e) => {
          SetInput(e.target.value);
        }}
      />
      <button className="m-2 p-2 bg-gray-100" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "m-3 p-3 line-through" : "m-3 p-3"}>
              {t.text}
            </span>
            <button
              className="border border-gray-500"
              onClick={() => deleteTodo(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Contact;
