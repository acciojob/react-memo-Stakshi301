import React,{ useState } from "react";
const Todo = () => {
  const [list, setList] = useState([]);

  const addTodo = () => {
    setList([...list, "New Todo"]); // Adds "Todo" to the list
  };

  return (
    <>
      <h1>React.useState Example</h1>
      <h3>My Todos</h3>
      <ul style={{listStyleType:"none"}}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
      <hr />
    </>
  );
};

export default Todo;
