import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
const ResetPassword = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate =useNavigate();
    const Validate =(e) =>{
        e.preventDefault();
        const login ={userName,password,emailId}
        LoginService.Validate(userName).then((response ) => {
            if(response.data.emailId===emailId){
                LoginService.Update(login).then((res)=>{
                    console.log(res.data);
                    navigate('/');
                })
            }
            else{
                alert("User not exist with given details please create new Account")
            }
                
        }).catch(error =>{
            console.log(error);
        })

    }
  return (
    <div>
        <br/>
        <br/>
      <div className="container">
          <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3"><br/>
              <h2 className="text-center">Reset Password</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-lable">User Name</label>
                            <input 
                            type="text"
                            placeholder="Enter user name"
                            name="userName"
                            value={userName} 
                            className="form-control"
                            onChange={(e) => setUserName(e.target.value) } 
                            >
                            </input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-lable">Password</label>
                            <input 
                            type="text"
                            placeholder="Enter New Password"
                            name="Newpassword"
                            value={password} 
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value) } 
                            >
                            </input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-lable">Email ID</label>
                            <input 
                            type="text"
                            placeholder="Enter email ID"
                            name="emailId"
                            value={emailId} 
                            className="form-control"
                            onChange={(e) => setEmailId(e.target.value) } 
                            >
                            </input>
                        </div>
                        <button className="btn btn-success" onClick={(e) => Validate(e)}
                        style = {{marginRight:"10px"}}> Submit</button>
                        <Link to ='/' className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ResetPassword;
