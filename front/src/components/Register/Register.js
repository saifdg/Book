import React from 'react'

const Register = () => {
  return (
    <div className="container">

<from>
        <h1>Register Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">

        <div class="filed">
            <label>Name</label>
            <input type="text" name="name" placeholder="name"   id="name" required></input> 
            </div>
           
            <div class="filed">
            <label>Email</label>
            <input type="text" name="email" placeholder="email"   id="email" required></input> 
            </div>

            <div class="filed">
            <label>Role</label>
            <input type="text" name="role" placeholder="role"   id="role" required></input> 
            </div>

        <div class="filed">
            <label>Password</label>
            <input type="text" name="password" placeholder="password"  id="password" required></input>
        </div>

        <button type="submit" class="registerbtn">Register</button>
        </div>

    <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>

    </from>



    </div>

  )
}

export default Register