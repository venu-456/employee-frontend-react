import React,{useState,useEffect} from 'react'
import { Link, useNavigate ,useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [admin, setIsAdmin] = useState(false)
    const {uid,id} = useParams();
    const [cl,setCL]=useState()
    const [el,setEL]=useState()
    const [pl,setPL]=useState()
    const navigate =useNavigate();
    const saveOrUpdateEmployee =(e) =>{
        e.preventDefault();
        const employee ={firstName,lastName,emailId,admin,cl,el,pl}
        if(id){
            EmployeeService.updateEmployee(id,employee).then((response ) => {
                console.log(response.data)
                navigate(`/home/${uid}/employees`);
        }).catch(error =>{
            console.log(error);
        })
    }
        else{
            console.log("creating",employee)
        EmployeeService.createEmployee(employee).then((response ) => {
                console.log(response.data)
                navigate(`/home/${uid}/employees`);
        }).catch(error =>{
            console.log(error);
        })}
    }
    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setIsAdmin(response.data.admin)
            setCL(response.data.cl)
            setEL(response.data.el)
            setPL(response.data.pl)
        }).catch(error =>{
            console.log(error);
        })
    }, [id])
    const title = () =>{
        if(id){
            return <h2 className="text-center"> Update Employee</h2>
        }
        else{
            return <h2 className="text-center"> Add Employee</h2>
        }
    }
    const check =() =>{
        if(admin){
            return true
        }
    }
  return (
    <div>
        <br/>
        <br/>
      <div className="container">
          <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3"><br/>
                {title()}
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-lable">First Name</label>
                            <input 
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            value={firstName} 
                            className="form-control"
                            onChange={(e) => setFirstName(e.target.value) } 
                            >
                            </input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-lable">Last Name</label>
                            <input 
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            value={lastName} 
                            className="form-control"
                            onChange={(e) => setLastName(e.target.value) } 
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
                        <div className="form-group mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Role" id="Admin" value="TRUE" onChange={(e) => setIsAdmin(e.target.value)} />
                                <label className="form-check-label" htmlFor="Admin">Admin</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Role" id="User" value="FALSE" onChange={(e) => setIsAdmin(e.target.value)} />
                            <label className="form-check-label" htmlFor="User">User</label>
                        </div> 
                        </div>
                        <div class="form-group row mb-2">
                             <label className="col-sm-2 col-form-label"><strong>Casual Leave</strong></label>
                            <div class="col-sm-10 pt-3">
                                <input type="number" placeholder="no.of casual leaves" name="Cl" className="form-control"  value={cl} onChange={(e) => setCL(e.target.value) } ></input>
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                             <label className="col-sm-2 col-form-label"><strong>Earned Leave</strong></label>
                            <div class="col-sm-10 pt-3">
                                <input type="number" placeholder="no.of earned leaves" name="EL" className="form-control"  value={el} onChange={(e) => setEL(e.target.value) } ></input>
                            </div>
                        </div> 
                        <div class="form-group row mb-2">
                             <label className="col-sm-2 col-form-label"><strong>Paid Leave</strong></label>
                            <div class="col-sm-10 pt-3">
                                <input type="number" placeholder="no.of paid leaves" name="PL" className="form-control"  value={pl} onChange={(e) => setPL(e.target.value) } ></input>
                            </div>
                        </div>                  
                        <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}
                        style = {{marginRight:"10px"}}> Submit</button>
                        <Link to ={`/home/${uid}/employees`} className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent
