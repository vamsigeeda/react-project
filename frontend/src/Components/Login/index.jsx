import React from 'react'

function index(props) {
    return (
        <div className="container">
           <h2 className="text-center">Login</h2>
            <form action="" onSubmit={(data)=>props.submit(data)}>

            <div className="col-md-8">
    <div className="input-group">
      <input type="email" className="form-control" id="validationDefaultUsername" name="email"  aria-describedby="inputGroupPrepend2" placeholder="Email" required/>
    </div>
    </div>
    <div className="col-md-8 mt-2">
    <input type="password" className="form-control" id="validationDefault03" name="password" placeholder="Password" required/>
    </div>

    <div className="col-12 mt-4">
    <button className="btn btn-primary" type="submit">Login</button>
  </div>
     </form>
            
        </div>
    )
}

export default index
