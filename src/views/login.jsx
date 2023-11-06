import React from 'react'
import "./login.css"
import { useState } from 'react'
import authentificationservice from '../services/authentificationservice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData]= useState({});
    const navigate = useNavigate()
    const OnChangeHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value,
          });console.log(data)
      }
    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        authentificationservice.signIn(data).then((res)=>{
            console.log(res);
            navigate('/home');
            localStorage.setItem("user", JSON.stringify(res.data));
        }).catch((error)=>{
            console.log(error);
        })
      }
  return (
    <div className="wrapper">
  <div className="logo">
    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt />
  </div>
  <div className="text-center mt-4 name">
    Twitter
  </div>
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
      <span className="far fa-user" />
      <input type="text" name="username" id="userName" placeholder="Username" onChange={OnChangeHandler} />
    </div>
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="password" name="password" id="pwd" placeholder="Password" onChange={OnChangeHandler} />
    </div>
    <button className="btn mt-3" onClick={OnSubmitHandler}>Login</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
  </div>
</div>
  )
}

export default Login