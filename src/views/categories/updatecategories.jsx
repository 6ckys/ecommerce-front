import React from 'react'

const Updatecategories = () => {
  return (
<div className="block">
  <h4>Update catégory</h4>
  <form className="form-horizontal" role="form">                                    
    <div className="form-group">
      <label className="col-md-2 control-label">Name</label>
      <div className="col-md-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-2 control-label">Image</label>
      <div className="col-md-10">
        <input type="file" className="form-control" />
      </div>
    </div>                                                                        
    <div className="form-group">
      <label className="col-md-2 control-label">Description</label>
      <div className="col-md-10">
        <textarea className="form-control" rows={5} defaultValue={""} />
      </div>
    </div>                                  
  </form>
</div>

  )
}

export default Updatecategories