import React, { useEffect, useState } from 'react'
import subcategoryservice from '../../services/subcategoryservice';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatesubcategories = () => {
  const [data, setData]= useState({});
  const OnChangeHandler=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value,
    });console.log(data)
  }
  const {id}=useParams();
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
        subcategoryservice.update(id, data)
        .then((res)=>{
          console.log(res)
          navigate('/listsubcategories')
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
    subcategoryservice.getOne(id).then((res) => {
      console.log("data of subcategory", res);
      setData(res.data.data);
    });
  }, [])
  return (
<div className="block">
  <h4>Update catégory</h4>
  <form className="form-horizontal" role="form">                                    
    <div className="form-group">
      <label className="col-md-2 control-label">Name</label>
      <div className="col-md-10">
        <input type="text" className="form-control" name='name' onChange={OnChangeHandler} value={data.name}/>
      </div>
    </div>                                                                      
    <div className="form-group">
      <label className="col-md-2 control-label">Description</label>
      <div className="col-md-10">
        <textarea className="form-control" rows={5} defaultValue={""} name='description' onChange={OnChangeHandler} value={data.description}/>
      </div>
    </div>
    <button onClick={OnSubmitHandler}>Submit</button>                                  
  </form>
</div>

  )
}

export default Updatesubcategories