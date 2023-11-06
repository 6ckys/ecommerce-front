import React, { useEffect, useState } from 'react'
import productservice from '../../services/productservice'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const Listproducts = () => {
    const [products, setProducts] = useState({})
    const [affiche, setAffiche] = useState(false)
    const getAllProducts = () => { 
        productservice.GetAll().then((res) => {
            console.log(res);
            setProducts(res.data.data);
            setAffiche(true);
        }).catch((err)=> {
            console.log(err);
        })
    }
    useEffect(() => {
        getAllProducts()
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
          productservice.remove(id).then((res) => {
            getAllProducts();
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
        <h3 className="panel-title">Produits</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>référence</th>
                <th width={100}>prix</th>
                <th width={100}>description</th>
                <th width={100}>photos</th>
                <th width={100}>quantités</th>
                <th width={100}>subcatégories</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>
                {products.map((item) => {
                    return (
                        <tr id="trow_1">
                          <td className="text-center">{item._id}</td>
                          <td><strong>{item.ref}</strong></td>
                          <td><strong>{item.price}</strong></td>
                          <td><span className="label label-success">{item.description}</span></td>
                          <td>{item.galleries?.map((gal)=>{
                            return <tr><img style={{width:"50px", height:"50px"}} src={"http://localhost:3000/file/products/"+gal}></img></tr>
                          })}</td>
                          <td><strong>{item.qte}</strong></td>
                          <td>{item.subcategory.name}</td>
                          <td>
                            <Link to={`/home/updateproducts/${item._id}`}><button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button></Link>
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


export default Listproducts