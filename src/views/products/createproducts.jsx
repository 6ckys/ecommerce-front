import React, { useEffect, useState } from 'react'
import productservice from '../../services/productservice';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import subcategoryservice from '../../services/subcategoryservice'

const Createproducts = () => {
  const [data, setData]= useState({});
  const [image, setImage]= useState([]);
  const [subcategories, setSubcategories]= useState([]);
  const getAllSubcategories = () => { 
    subcategoryservice.GetAll().then((res) => {
        console.log(res);
        setSubcategories(res.data.data);
    }).catch((err)=> {
        console.log(err);
    })
}
useEffect(() => {
    getAllSubcategories()
},[])
  const OnChangeHandler=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value,
    });console.log(data)
  }
  const navigate = useNavigate();
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    const formdata=new FormData()
    formdata.append('ref',data.ref)
    formdata.append('price',data.price)
    formdata.append('qte',data.qte)
    formdata.append('subcategory',data.subcategory)
    formdata.append('description',data.description)
  
  
    for(let i=0;i<=image.length;i++){
      formdata.append("files",image[i])
    }
    Swal.fire({
      title: 'Do you want to cofirm ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        productservice.create(formdata)
        .then((res)=>{
          console.log(res)
          navigate('/home/listproducts')
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
  <h4>Create produit</h4>
  <form className="form-horizontal" role="form">                                    
  <div className="form-group">
      <label className="col-md-2 control-label">Référence</label>
      <div className="col-md-10">
        <input type="text" className="form-control" name='ref' onChange={OnChangeHandler}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-2 control-label">Prix</label>
      <div className="col-md-10">
        <input type="text" className="form-control" name='price' onChange={OnChangeHandler}/>
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-2 control-label">Quantité</label>
      <div className="col-md-10">
        <input type="text" className="form-control" name='qte' onChange={OnChangeHandler}/>
      </div>
    </div>    
    <div className="form-group">
      <label className="col-md-2 control-label">Subcategorie</label>
      <div className="col-md-10">
        <select type="text" className="form-control" name='subcategory' onChange={OnChangeHandler}>
          {subcategories?.map((item)=>{
            return (<option value={item._id}>{item.name}</option>

            )
          })}
          
        </select>
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
        <input type="file" className="form-control" name='files' onChange={HandleImage}/>
      </div>
    </div>  
    <button onClick={OnSubmitHandler}>Submit</button>                                  
  </form>
</div>

  )
}

export default Createproducts