import React, { useEffect, useState } from "react";
import "./Admin.css";
import Axios from "axios";
import Inputs from "../Inputs";

const Admin = () => {
  const [users, setUsers] = useState({});
  const fn = async () => {
    const result = await Axios.get("/api/users");
    setUsers({ data: result.data });
  };
  const [form, setForm] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(async () => {
    fn();
  }, []);

  const Submit =async()=>{
    await Axios.post("/api/books", form)
  }

  console.log(users.data);
  console.log(form);

  return (
    <div className="cont">
      <h1>Users List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">role</th>
          </tr>
        </thead>
        <tbody>
          {users.data
            ? users.data.map((user, idx) => (
                <tr key={idx}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>

      <h1>create Book</h1>
      <form onSubmit={Submit}>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            title
          </label>
          <Inputs
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            name="title"
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            category
          </label>
          <Inputs
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            name="category"
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            author
          </label>
          <Inputs
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            name="author"
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            price
          </label>
          <Inputs
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            name="price"
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            description
          </label>
          <Inputs
           type="textarea"
            class="form-control"
            id="exampleInputPassword1"
            name="description"
            onChangeHandler={onChangeHandler}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Create Book
        </button>
      </form>
    </div>
  );
};

export default Admin;
