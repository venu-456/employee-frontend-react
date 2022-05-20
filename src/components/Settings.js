import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import { useLocation } from 'react-router-dom';
const Settings = () => {
    const location=useLocation()
    const [userName, setUserName] = useState('')
    const [OldPassword, setOldPassword] = useState('')
    const [NewPassword, setNewPassword] = useState('')
    const [emailId, setEmailId] = useState('')
    const [empId, setEmpId] = useState(location.pathname.split('/')[2])
    const navigate =useNavigate();
    const Validate =(e) =>{
        e.preventDefault();
        const password=NewPassword;
        const login ={userName,password,emailId}
        LoginService.Validate(userName).then((response ) => {
            if(response.data.emailId===emailId && response.data.password===OldPassword){
                LoginService.Update(login).then((res)=>{
                    console.log(res.data);
                    navigate(`/home/${empId}`);
                    alert("updated new password")
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
                            <label className="form-lable">Old Password</label>
                            <input 
                            type="text"
                            placeholder="Enter Old Password"
                            name="Old Password"
                            value={OldPassword} 
                            className="form-control"
                            onChange={(e) => setOldPassword(e.target.value) } 
                            >
                            </input>
                        </div>
                            <div className="form-group mb-2">
                            <label className="form-lable"> New Password</label>
                            <input 
                            type="text"
                            placeholder="Enter New Password"
                            name="Newpassword"
                            value={NewPassword} 
                            className="form-control"
                            onChange={(e) => setNewPassword(e.target.value) } 
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
                        <Link to ={`/home/${empId}`} className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Settings;
