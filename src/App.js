import React from "react";
import fire from "./config/Fire";
import LoginRegister from "./components/LoginRegister";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{this.state.user ? <Home /> : <LoginRegister />}</div>;
  }
}

export default App;
