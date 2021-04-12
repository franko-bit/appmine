import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import "./signup.css";
const Sign = () => {
  const [state, setState] = useState({
    user: "",
    pass: "",
  });
  const handle = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
    window.alert(state);
  };
  return (
    <div className="col-md-3 ">
      <h5 className="logou">Register</h5>
      <form className="jumbotron on">
        <label className="lab">Email Address</label>
        <Input
          type="text"
          name="user"
          className="form-control col-md-8"
          placeholder="Enter Username"
          value={state.user}
          onChange={(e) => handle(e)}
        />
        <p>We'll never share your email with anyone else</p>
        <label className="lab">Password</label>
        <Input
          type="password"
          name="pass"
          className="form-control col-md-8"
          placeholder="Enter password"
          value={state.pass}
          onChange={(e) => handle(e)}
        />
        <label className="lab">Comform Password</label>
        <Input
          type="password"
          name="pass"
          className="form-control col-md-8"
          placeholder="Comform password"
          value={state.pass}
          onChange={(e) => handle(e)}
        />
        <Button
          type="submit"
          name="submit"
          value="submit"
          className="form-control col-md-4 nu"
        />
        <br />
        <center>
          Dont have an account?<a href="#">Login Here</a>
        </center>
      </form>
    </div>
  );
};
export default Sign;
