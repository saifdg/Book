import React, { useState } from "react";
import "./Login.css";
import Inputs from "../Inputs";
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import { LoginAction } from "../../redux/actions/books/authActions";


const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit  = (e) => {
    e.preventDefault();
   dispatch(LoginAction(form,navigate)) // activer la fct login action 

  }
  console.log(form)
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <Inputs
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <Inputs
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            onChangeHandler={onChangeHandler}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
