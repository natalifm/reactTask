import React from "react";
import fire from "./../config/Fire";

export default class LoginRegister extends React.Component {
  state = {
    email: "",
    password: "",
    fireErrors: "",
    formTitle: "Login",
    loginBtn: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        this.setState({ fireErrors: error.message });
      });
  };

  register = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        this.setState({ fireErrors: error.message });
      });
  };

  getAction = action => {
    if (action === "reg") {
      this.setState({
        formTitle: "Register New User",
        loginBtn: false,
        fireErrors: ""
      });
    } else {
      this.setState({ formTitle: "Login", loginBtn: true, fireErrors: "" });
    }
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="Error">{this.state.fireErrors}</div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <input
        className="loginBtn"
        type="submit"
        onClick={this.login}
        value="Login"
      />
    ) : (
      <input
        className="loginBtn"
        type="submit"
        onClick={this.register}
        value="Register"
      />
    );

    let login_register = this.state.loginBtn ? (
      <button className="registerBtn" onClick={() => this.getAction("reg")}>
        Register
      </button>
    ) : (
      <button className="registerBtn" onClick={() => this.getAction("login")}>
        Login
      </button>
    );

    return (
      <div className="form_block">
        <div className="form_block__title">{this.state.formTitle}</div>
        <div className="form_block__body">
          {errorNotification}
          <form>
            <input
              className="form_block__input"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              placeholder="email"
            />

            <input
              className="form_block__input"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              placeholder="password"
            />
            {/*submitbtn */}
            {submitBtn}
          </form>
          {login_register}
        </div>
      </div>
    );
  }
}
