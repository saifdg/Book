import React, { useState } from "react";
import "./Register.css";
import Inputs from "../Inputs";
import { useDispatch, useSelector } from "react-redux";
import { Registration } from "../../redux/actions/books/authActions";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if(form.password == form.ConfirmePassword){
        e.preventDefault();
        dispatch(Registration(form, navigate));
    }
 
  };
  console.log(form);
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2>Register</h2>
        <div class="mb-3">
          <label for="Name" class="form-label">
            Name
          </label>
          <Inputs
            type="text"
            class="form-control"
            id="Name"
            name="name"
            onChangeHandler={onChangeHandler}
          />
        </div>
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
        <div class="mb-3">
          <label for="exampleInputConfirmePassword" class="form-label">
            Confirme Password
          </label>
          <Inputs
            type="password"
            class="form-control"
            id="exampleInputConfirmePassword"
            name="ConfirmePassword"
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

export default Register;
