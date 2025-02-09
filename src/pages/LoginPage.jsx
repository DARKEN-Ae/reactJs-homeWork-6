import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/Login.scss";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (user.username === "" && user.password === "") {
      toast.error("Iltimos Username va Parolingizni Kiriting");
    } else if (user.username === "Arslon" && user.password === "2005") {
      navigate("/debts");
    } else if (user.username === true && user.password === true) {
      toast.error("Muvafaqqiyatli");
    } else {
      toast.error("Login va Parol xato!");
      setUser({ username: "", password: "" });
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="d-flex justify-center align-center vh-100 form_father">
      <div className="form-container">
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
          </Form.Group>
          <Button className="button" variant="primary" type="submit">
            <span>Kirish</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
