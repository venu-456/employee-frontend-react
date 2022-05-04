import React,{useState,useEffect} from 'react'
import { Link, useNavigate ,useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const {id} = useParams();
    const navigate =useNavigate();
    const saveOrUpdateEmployee =(e) =>{
        e.preventDefault();
        const employee ={firstName,lastName,emailId}
        if(id){
            EmployeeService.updateEmployee(id,employee).then((response ) => {
                console.log(response.data)
                navigate('/employees');
        }).catch(error =>{
            console.log(error);
        })
    }
        else{
        EmployeeService.createEmployee(employee).then((response ) => {
                console.log(response.data)
                navigate('/employees');
        }).catch(error =>{
            console.log(error);
        })}

    }
    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
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
                        <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}
                        style = {{marginRight:"10px"}}> Submit</button>
                        <Link to ='/employees' className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent
