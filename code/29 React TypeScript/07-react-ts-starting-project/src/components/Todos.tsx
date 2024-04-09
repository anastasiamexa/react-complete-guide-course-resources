import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// FC = Function Component <{}> is generic type
const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
        {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} />
        ))}
    </ul>
  );
}

export default Todos;