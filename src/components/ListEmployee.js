import React,{useState,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployee = () => {
    const [employees,setEmployees]=useState([])
    const {uid} = useParams();
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        getAllEmployees();
    }, [])
    useEffect(() => {
        EmployeeService.getEmployeeById(uid).then((response)=>{
            setIsAdmin(response.data.admin)
        }).catch(error =>{
            console.log(error);
        })
    }, [uid])
const getAllEmployees =() =>{
    EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data)
        console.log(response.data)
    }).catch(error => {
        console.log(error);
    })
}
    
const deleteEmployee = (employeeId) =>{
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();
    })
}
  return (
    <div>
        <div className="container">
            <h2 className="text-center">List Employees</h2><br/>
            {isAdmin&&<Link to= {`/home/${uid}/add-employee`} className ="btn btn-primary mb-2">Add Employee</Link>}
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th> Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        {
                                            isAdmin && (
                                                <>
                                                <Link className="btn btn-info" to = {`/home/${uid}/edit-employee/${employee.id}`}>update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                        style = {{marginLeft:"10px",marginRight:"10px"}}>delete</button>
                                        </>
                                            )
                                        }
                                        <Link className="btn btn-info" to = {`/home/${uid}/view-profile/${employee.id}`} >View</Link>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default ListEmployee
