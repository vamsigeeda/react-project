import React from 'react'

function index(props) {
    return (
        <div className="container">
            <h2 className="text-center">Registeration</h2>
            <form className="row g-3" onSubmit={(data)=>props.submit(data)}>
  <div className="col-md-12">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" name="firstName" id="validationDefault01" required/>
  </div>
  <div className="col-md-12">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" name="LastName" id="validationDefault02"  required/>
  </div>
  <div className="col-md-12">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="email" className="form-control" name="email" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">password</label>
    <input type="password" className="form-control" name="password" id="validationDefault03" required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault05" className="form-label">confirm password</label>
    <input type="password" className="form-control" name="confirmpassword" id="validationDefault05" required/>
  </div>
  <div className="col-12 mt-4">
    <button className="btn btn-primary" type="submit">Register</button>
  </div>
</form>
        </div>
    )
}

export default index
