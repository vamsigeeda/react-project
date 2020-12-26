import React, { Component } from 'react'
import Registration from '../../Components/Registration';
import {makeRequest} from '../../Utils/index';
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
   

    makeRequest('/posts/register',{method:"POST" ,data:formData})
    .then((res)=>res.json())
    .then((result)=>console.log(result),
    (error)=>console.log(error.message));
    }

    render() {
        return (
            <div>
              <Registration submit={this.handleSubmit}/>  
            </div>
        )
    }
}

export default index
