import React from "react"
//components
import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }      
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoContainer