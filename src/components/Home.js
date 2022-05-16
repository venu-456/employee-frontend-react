import React,{useState} from 'react'
import '../home.css'
import {Route,Routes} from "react-router-dom";
import ListEmployee from "./ListEmployee";
import AddEmployeeComponent from "./AddEmployeeComponent";
import Profile from "./Profile"
export const Home = () => {
    const [isActive, setIsActive] = useState(false);
    const toggle =(e)=>{
        e.preventDefault();
        setIsActive(!isActive);
    }

  return (
    <div>
        <div className={`vertical-nav ${isActive ? 'active': null } bg-white`} id='sidebar'>
        <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-item-center"><img src="/images/venu.jpg" alt="..." width="80" height="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
            <div className="media-body mt-3">
                <h4 className="m-0 ">Venu</h4>
                <p className="font-weight-normal text-muted mb-0">Web developer</p>
            </div>
            </div>
        </div>
        <p className="text-gray text-center font-weight-bold text-uppercase px-3 small pb-4 mb-0">Menu</p>
        <ul className="nav flex-column bg-white mb-0">
            <li className="nav-items"><a href="/home" className="nav-link text-dark bg-light">
            <i className='bx bx-home' ></i>
            Home</a>
            </li>
            <li className="nav-items"><a href="home/employees" className="nav-link text-dark bg-light">
            <i className='bx bx-group'></i>
            View Employees</a>
            </li>
            <li className="nav-items"><a href="home/profile" className="nav-link text-dark bg-light">
            <i className='bx bxs-user-circle'></i>
            Profile</a>
            </li>
            <li className="nav-items"><a href="/home" className="nav-link text-dark bg-light">
            <i className='bx bx-wrench'></i>
            Settings</a>
            </li>
            <li className="nav-items"><a href="/" className="nav-link text-dark bg-light">
            <i className='bx bx-log-out' ></i>
            Logout</a>
            </li>
        </ul>
    </div>
        <div className={`page-content ${isActive ? 'active': null } p-5`} id="content">

            <button onClick={toggle} type='button' className="btn btn-light bglight rounded-pill shadow-sm px-4 mb-4"
                      >
                <i className='bx bx-menu'></i>
            </button>
            <Routes>
                <Route path="/employees" element={<ListEmployee/>}/>
                <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
                <Route path="/edit-employee/:id" element ={<AddEmployeeComponent/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>

    </div>


  )
}
export default Home;