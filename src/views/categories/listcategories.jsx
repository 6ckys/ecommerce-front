import React, { useEffect, useState } from 'react'
import categoryservice from '../../services/categoryservice'
import Swal from 'sweetalert2'

const Listcategories = () => {
    const [categories, setCategories] = useState({})
    const [affiche, setAffiche] = useState(false)
    const getAllCategories = () => { 
        categoryservice.GetAll().then((res) => {
            console.log(res);
            setCategories(res.data.data);
            setAffiche(true);
        }).catch((err)=> {
            console.log(err);
        })
    }
    useEffect(() => {
        getAllCategories()
    },[])
    const onDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          categoryservice.remove(id).then((res) => {
            getAllCategories();
          })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
    if(affiche)
  {
    return (
    <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Catégories</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>name</th>
                <th width={100}>description</th>
                <th width={100}>image</th>
                <th width={100}>subcategories</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>
                {categories.map((item) => {
                    return (
                        <tr id="trow_1">
                          <td className="text-center">{item._id}</td>
                          <td><strong>{item.name}</strong></td>
                          <td><span className="label label-success">{item.description}</span></td>
                          <td><img style={{width:"50px", height:"50px"}} src={"http://localhost:3000/file/categories/"+item.file}></img></td>
                          <td>{item.subcategories.map((subc)=>{
                            return <tr>{subc.name}</tr>
                          })}</td>
                          <td>
                            <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                            <button className="btn btn-danger btn-rounded btn-sm" onClick={(e) => onDelete(item._id)}><span className="fa fa-times" /></button>
                          </td>
                        </tr>
                    );
                })}                                          
              
            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>

  )
}
}


export default Listcategories