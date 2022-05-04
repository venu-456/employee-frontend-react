import React,{useState}from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import LoginService from '../services/LoginService';

const Login = () => {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const navigate =useNavigate();
    const Validate =(e) =>{
        e.preventDefault();
        LoginService.Validate(userName).then((response)=>{
            
            if(password===response.data.password){
                console.log('logging');
            navigate('/employees');
        }
        else{
          alert("Invalid credentials")
        }
        })

    }
  return (
    <div>
      <div>
        <br/>
        <br/>
      <div className="container">
          <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3"><br/>
              <h2 className="text-center">Login</h2>
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
                            onChange={(e) => setuserName(e.target.value) } 
                            >
                            </input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-lable">Password</label>
                            <input 
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={password} 
                            className="form-control"
                            onChange={(e) => setpassword(e.target.value) } 
                            >
                            </input>
                        </div>
                        
                        <button className="btn btn-success" onClick={(e) => Validate(e)}
                        style = {{marginRight:"10px"}}> Login</button>
                        <Link to= "/add-Login" className ='btn btn-primary' style = {{marginRight:"10px"}}>Create Account</Link>
                        <Link to ="/reset-password" className='btn btn-info'>Forgetpassword</Link>
                    </form>
                </div>
              </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Login
