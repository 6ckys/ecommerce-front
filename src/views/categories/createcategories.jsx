import React, { useEffect, useState } from 'react'
import categoryservice from '../../services/categoryservice';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Createcategories = () => {
  const [data, setData]= useState({});
  const [image, setImage]= useState([]);
  const OnChangeHandler=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value,
    });console.log(data)
  }
  const navigate = useNavigate();
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    const formdata=new FormData()
      formdata.append('name',data.name)
      formdata.append('description',data.description)
  
  
    for(let i=0;i<=image.length;i++){
      formdata.append("file",image[i])
    }
    Swal.fire({
      title: 'Do you want to cofirm ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        categoryservice.create(formdata)
        .then((res)=>{
          console.log(res)
          navigate('/listcategories')
        })
        Swal.fire('Created!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('canceled', '', 'info')
      }
    })
    .catch((err)=>{
  console.log(err)
    })
  }
  const HandleImage = (e) => {
    setImage(e.target.files);
  };
  return (
<div className="block">
  <h4>Create catégory</h4>
  <form className="form-horizontal" role="form">                                    
    <div className="form-group">
      <label className="col-md-2 control-label">Name</label>
      <div className="col-md-10">
        <input type="text" className="form-control" name='name' onChange={OnChangeHandler}/>
      </div>
    </div>                                                                      
    <div className="form-group">
      <label className="col-md-2 control-label">Description</label>
      <div className="col-md-10">
        <textarea className="form-control" rows={5} defaultValue={""} name='description' onChange={OnChangeHandler}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-2 control-label" >Image</label>
      <div className="col-md-10">
        <input type="file" className="form-control" name='file' onChange={HandleImage}/>
      </div>
    </div>  
    <button onClick={OnSubmitHandler}>Submit</button>                                  
  </form>
</div>

  )
}

export default Createcategories