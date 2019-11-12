import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      length: 0,
      text: ""
    };
    this.init();
  }

  init() {
    fetch("/test/all", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      credentials: "same-origin",
      redirect: "follow"
    })
      .then(res => {
        debugger;
        if (res.ok) {
          return res.json();
        } else if (res.status === 403) {
          window.location = "http://localhost:3000/auth/login"; // ?redirect_url=" + encodeURIComponent("http://localhost:3001/");
        }
      })
      .then(res => {
        this.setState((prevState, props) => {
          return {
            data: res.data,
            length: res.data.length,
            text: JSON.stringify(res.data)
          };
        });
      })
      .catch(err => {
        debugger;
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.text}
          </a>
        </header>
      </div>
    );
  }
}
