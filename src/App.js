/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div
        className="switch"
      //style={{ backgroundColor:  }}
      >
        <Provider>
          <Header smthn={() => { }} />
          <Switch>
            <Route
              exact
              path="/"
            />
          </Switch>
        </Provider>
      </div>
    );
  }
}

//<Route path="/" component={} />

export default App;
