import React from 'react'
import "./login.css"
import { useState } from 'react'
import authentificationservice from '../services/authentificationservice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [data, setData]= useState({});
    const navigate = useNavigate();
    const [image, setImage]= useState([]);
    const OnChangeHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value,
          });console.log(data)
      }
    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        const formdata=new FormData()
        formdata.append('username',data.username)
        formdata.append('password',data.password)
        formdata.append('email',data.email)
        formdata.append('phone',data.phone)
  
  
        for(let i=0;i<=image.length;i++){
          formdata.append("file",image[i])
        }

        authentificationservice.signUp(formdata).then((res)=>{
            console.log(res);
            navigate('/login');
        }).catch((error)=>{
            console.log(error);
        })
    }
    const HandleImage = (e) => {
      setImage(e.target.files);
    };
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
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="text" name="email" id="pwd" placeholder="email" onChange={OnChangeHandler} />
    </div>
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="text" name="phone" id="pwd" placeholder="phone" onChange={OnChangeHandler} />
    </div>
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="file" className="form-control" name='file' onChange={HandleImage}/>
    </div>
    <button className="btn mt-3" onClick={OnSubmitHandler}>Sign up</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Have an account?</a> or <a href="#">Sign in</a>
  </div>
</div>
  )
}

export default Signup