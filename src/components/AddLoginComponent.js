import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
const AddLoginComponent = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate =useNavigate();
    const saveLogin =(e) =>{
        e.preventDefault();
        const login ={userName,password,emailId}
        LoginService.Create(login).then((response ) => {
                navigate('/');
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
              <h2 className="text-center"> Create Account</h2>
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
                            placeholder="Enter password"
                            name="password"
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
                        <button className="btn btn-success" onClick={(e) => saveLogin(e)}
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

export default AddLoginComponent
