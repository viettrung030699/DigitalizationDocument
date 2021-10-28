import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Register } from "./RegisterForm";
// import { Redirect } from "react-router";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [id, setID] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function requestPwd(event) {
    setShow(false);
    const url = "http://localhost:8000/api/lecturers/".concat(id);
    const response = await axios(url);
    console.log(typeof response.data);
    setData(response.data);
    console.log(data);
  }
  const history = useHistory();

  const routeChange = () => {
    let path = `/dashboard`;
    history.push(path);
  };

  function login(event) {
    routeChange();
    console.log("Login Success!");
  }

  // async function login(event) {
  //   const url = "http://localhost:8000/api/authentication";
  //   const response = await axios({
  //     method: "post",
  //     url: url,
  //     data: {
  //       email: email,
  //       pwd: password,
  //     },
  //   });
  //   console.log(response.data);
  //   if (response.data === true) {
  //     localStorage.setItem("authentication", response.data);
  //     routeChange();
  //   } else {
  //     alert("Login Error");
  //   }
  // }

  return (
    <div className="Login">
      <div className="Login-Info">
        <div className="Login-Info__greeting">Xin Chào!</div>
        <div className="Login-Info__scripting">
          <p className="scripting_1">Hiện bạn đang không được cấp quyền để sử dụng một số tính năng. </p>
          <p className="scripting_2">Hãy tiến hành đăng nhập tài khoản với phân quyền đủ cao để tiếp tục.</p>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            size="lg"
            type="email"
            placeholder="admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
          onClick={login}
        >
          Đăng Nhập
        </Button>
      </Form>
    </div>
  );
};
