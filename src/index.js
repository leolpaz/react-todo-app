import React from "react"
import ReactDOM from "react-dom"

//stylesheet
import "./App.css"

//components

import TodoContainer from "./components/TodoContainer"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)