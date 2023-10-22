import React, { useEffect, useState } from 'react'
import subcategoryservice from '../../services/subcategoryservice'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const Listsubcategories = () => {
    const [subcategories, setSubcategories] = useState({})
    const [affiche, setAffiche] = useState(false)
    const getAllSubcategories = () => { 
        subcategoryservice.GetAll().then((res) => {
            console.log(res);
            setSubcategories(res.data.data);
            setAffiche(true);
        }).catch((err)=> {
            console.log(err);
        })
    }
    useEffect(() => {
        getAllSubcategories()
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
          subcategoryservice.remove(id).then((res) => {
            getAllSubcategories();
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
                <th width={100}>categories</th>
                <th width={100}>products</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>
                {subcategories.map((item) => {
                    return (
                        <tr id="trow_1">
                          <td className="text-center">{item._id}</td>
                          <td><strong>{item.name}</strong></td>
                          <td><span className="label label-success">{item.description}</span></td>
                          <td><strong>{item.category.name}</strong></td>
                          <td>{item.products.map((pro)=>{
                            return <tr>{pro.ref}</tr>
                          })}</td>
                          <td>
                            <Link to={`/updatesubcategories/${item._id}`}><button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button></Link>
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


export default Listsubcategories