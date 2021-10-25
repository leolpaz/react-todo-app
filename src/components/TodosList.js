import React from "react";
//components
import TodoItem from "./TodoItem";

export default class TodosList extends React.Component {
  render() {
    return (
      <ul>
       {this.props.todos.map(todo => (
         <TodoItem key={todo.id} todo={todo} />
       ))}
       </ul>
    );
  }
}