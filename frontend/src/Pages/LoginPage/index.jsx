import React, { Component } from 'react'
import {connect} from 'react-redux';

import Login from "../../Components/Login";
import {makeRequest}  from "../../Utils/index";

 import {userloginrequest,userloginsuccess,userloginfailure} from '../Store/Actions/index';
export class index extends Component {
 
     handleSubmit = (e)=>{
         e.preventDefault();
         e.stopPropagation();
         
    const formData = {};

    for (let f of e.target) {
      
      if (f.type !== "submit") {
  
        formData[f.name] = f.value;
      }
    }
   this.props.userloginrequest();
     makeRequest('/posts/login',{method:"POST" ,data:formData})
     .then((res)=>res.json())
     .then((result)=>this.props.userloginsuccess(result),
     (error)=>this.props.userloginfailure(error.message));

     }

    render() {
        return (
            <div>
                <Login submit = {this.handleSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
  userloginrequest,
  userloginsuccess,
  userloginfailure
}

export default connect(
  null,
  mapDispatchToProps
)(index)
