import React, { useEffect, useState } from 'react'
import subcategoryservice from '../../services/subcategoryservice';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import categoryservice from '../../services/categoryservice'

const Createsubcategories = () => {
  const [data, setData]= useState({});
  const [categories, setCategories]= useState([]);
  const getAllCategories = () => { 
    categoryservice.GetAll().then((res) => {
        console.log(res);
        setCategories(res.data.data);
    }).catch((err)=> {
        console.log(err);
    })
}
useEffect(() => {
    getAllCategories()
},[])
  const OnChangeHandler=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value,
    });console.log(data)
  }
  const navigate = useNavigate();
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
  
    Swal.fire({
      title: 'Do you want to cofirm ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        subcategoryservice.create(data)
        .then((res)=>{
          console.log(res)
          navigate('/home/listsubcategories')
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
      <label className="col-md-2 control-label">Catégorie</label>
      <div className="col-md-10">
        <select type="text" className="form-control" name='category' onChange={OnChangeHandler}>
          {categories?.map((item)=>{
            return (<option value={item._id}>{item.name}</option>

            )
          })}
          
        </select>
      </div>
    </div> 
    <button onClick={OnSubmitHandler}>Submit</button>                                  
  </form>
</div>

  )
}

export default Createsubcategories