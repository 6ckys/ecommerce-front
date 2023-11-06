import React, { useEffect, useState } from 'react'
import "./profile.css"
import profileservice from '../services/profileservice';
import { useNavigate ,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updateprofile = () => {
  const [data, setData]= useState({});
  const [image, setImage]= useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.user._id;
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    const formdata=new FormData()
      formdata.append('username',data.username)
      formdata.append('email',data.email)
      formdata.append('phone',data.phone)
      formdata.append('photo',data.photo)
  
  
    /*for(let i=0;i<=image.length;i++){
      formdata.append("file",image[i])
    }*/
    Swal.fire({
      title: 'Do you want to cofirm ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        profileservice.update(id, formdata)
        .then((res)=>{
          console.log(res)
          navigate('/profile')
        })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('canceled', '', 'info')
      }
    })
    .catch((err)=>{
  console.log(err)
    })
  }
  useEffect(() => {
    profileservice.getOne(id).then((res) => {
      console.log("data of profile", res);
      setData(res.data.data);
    });
  }, [])
  const HandleImage = (e) => {
    setImage(e.target.file);
  };
  const OnChangeHandler=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value,
    });console.log(data)
  }
  return (
    <div className="container">
  <div className="main-body">
    {/* Breadcrumb */}
    <nav aria-label="breadcrumb" className="main-breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
      </ol>
    </nav>
    {/* /Breadcrumb */}
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={"http://localhost:3000/file/user/"+data.photo} alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4>{data.username}</h4>
                <p className="text-secondary mb-1">Full Stack Developer</p>
                <p className="text-muted font-size-sm">Sousse, Tunisie</p>
                <button className="btn btn-primary">Follow</button>
                <button className="btn btn-outline-primary">Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" name='username' onChange={OnChangeHandler} value={data.username}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type="text" className="form-control" name='email' onChange={OnChangeHandler} value={data.email}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" name='phone' onChange={OnChangeHandler} value={data.phone}/>
              </div>
            </div>
            <input type="file" className="form-control" name='file' onChange={HandleImage}/>
            <div className="row">
              <div className="col-sm-12">
              <button onClick={OnSubmitHandler}>Submit</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Updateprofile