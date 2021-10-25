import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"

//stylesheet
import "./functionBased/App.css"

//components
import TodoContainer from "./functionBased/components/TodoContainer"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)