import React, { useEffect, useState } from 'react'
import "./profile.css"
import profileservice from '../services/profileservice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Profile = () => {
  const [data, setData]= useState({});
  const [image, setImage]= useState([]);
  const {username}=useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.user._id;
  useEffect(() => {
    profileservice.getOne(id).then((res) => {
      console.log("data of profile", res);
      setData(res.data.data);
    });
  }, [])
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
                {data.username}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {data.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {data.phone}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
              <Link to={`/updateprofile`}><button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /> Edit </button></Link>
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

export default Profile