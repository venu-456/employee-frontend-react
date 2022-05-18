import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const Profile = () => {
  const {id} = useParams();
  const [FirstName, setFirstName] = useState('')
  const [About, setAbout] = useState('')
  const [Designation, setDesignation] = useState('')
  const [Contact, setContact] = useState('')
  const [empid,setEmpid]=useState('')
  const [img, setImg] = useState('')
  
  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response)=>{
        setImg(response.data.img)
        setFirstName("Name : "+response.data.firstName)
        setAbout("About me : "+response.data.about)
        setDesignation("Role : "+response.data.designation)
        setEmpid('Employee id : Al'+id)
        setContact('Contact : '+response.data.contact+"    Email : "+response.data.emailId)
    }).catch(error =>{
        console.log(error);
    })
}, [id])
  return (
 
      <div className="card mx-auto w-50 p-3" >
  <img src={`/images/${img}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{FirstName}</h5>
    <p className="card-text">{About}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{Designation}</li>
    <li className="list-group-item">{empid}</li>
    <li className="list-group-item">{Contact}</li>
  </ul>
  <div className="card-body">
    <a href="/home" className="card-link btn btn-info">Apply leave</a>
    <a href="/home" className="card-link btn btn-success">Edit Profile</a>
  </div>
</div>

  )
}
export default Profile;


