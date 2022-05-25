import React,{useState,useEffect} from 'react'
import { useParams ,Link,useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const EditProfile = () => {
  const {uid,id} = useParams();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [about, setAbout] = useState('')
  const [designation, setDesignation] = useState('')
  const [contact, setContact] = useState('')
  const [emailId , setEmailId] =useState('')
  const [empid,setEmpid]=useState('')
  const [img, setImg] = useState('')
  const navigate =useNavigate();
  
  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response)=>{
        setImg(response.data.img)
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setAbout(response.data.about)
        setDesignation(response.data.designation)
        setEmpid(id)
        setContact(response.data.contact)
        setEmailId(response.data.emailId)
        
    }).catch(error =>{
        console.log(error);
    })
}, [id])
const update =(e)=>{
    e.preventDefault();
      alert("do you want to update")
      const employee ={firstName,lastName,about,designation,emailId,contact}
      EmployeeService.updateEmployeeprofile(id,employee).then((response ) => {
        console.log(response.data)
        navigate(`/home/${uid}/profile/${id}`);
  }).catch(error =>{
    console.log(error);
})
  }
  return (
    <div className="card mx-auto w-50 p-3" >
  <img src={`/images/${img}`} className="card-img-top" alt="..."/>
  
  <div className="card-body ">
  <div class="form-group row mb-4">
  <label className="col-sm-2 col-form-label"><strong>Name</strong></label>
    <div class="col-sm-10">
      <input type="text" placeholder="Your name" name="name" className="form-control"  value={firstName} onChange={(e) => setFirstName(e.target.value) } ></input>
    </div>
  </div>
  <div class="form-group row">
  <label className="col-sm-2 col-form-label"><strong>Last Name</strong></label>
    <div class="col-sm-10">
      <input type="text" placeholder="Your last name" name="last_name" className="form-control"  value={lastName} onChange={(e) => setLastName(e.target.value) } ></input>
    </div>
  </div>
  <div class="form-group row">
  <label className="col-sm-2 col-form-label"><strong>Bio</strong></label>
    <div class="col-sm-10">
      <input type="text" placeholder="Tell about yourself" name="About" className="form-control"  value={about} onChange={(e) => setAbout(e.target.value) } ></input>
    </div>
  </div>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item mb-2">
    <label className="form-lable"><strong>Designation</strong></label>
                            <input 
                            type="text"
                            placeholder="enter your designation"
                            name="userName"
                            value={designation} 
                            className="form-control"
                            onChange={(e) => setDesignation(e.target.value) } 
                            >
                            </input></li>
    <li className="list-group-item mb-2">
    <label className="form-lable"><strong>Phone Number</strong></label>
                            <input 
                            type="text"
                            placeholder="enter your designation"
                            name="userName"
                            value={contact} 
                            className="form-control"
                            onChange={(e) => setContact(e.target.value) } 
                            >
                            </input></li>
                            <li className="list-group-item mb-2">
    <label className="form-lable"><strong>Email</strong></label>
                            <input 
                            type="email"
                            placeholder="enter your email"
                            name="Email"
                            value={emailId} 
                            className="form-control"
                            onChange={(e) => setEmailId(e.target.value) } 
                            >
                            </input></li>
                            <div className="card-body">
        <button className="btn btn-success" onClick={(e) => update(e)}
                        style = {{marginRight:"10px"}}> update</button>
        <Link to ={`/home/${uid}/profile/${id}`} className='btn btn-danger'>Cancel</Link>
  </div>                  
    
  </ul>
</div>
  )
}

export default EditProfile
