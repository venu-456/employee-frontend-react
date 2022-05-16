import React from 'react'
import '../home.css'

export const Sidebar = () => {
  return (
    <div>
        <div className="vertical-nav bg-white" id='sidebar'>
        <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-item-center"><img src="./images/venu.jpg" alt="..." width="80" height="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
            <div className="media-body mt-3">
                <h4 className="m-0 ">Venu</h4>
                <p className="font-weight-normal text-muted mb-0">Web developer</p>
            </div>
            </div>    
        </div> 
        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">This is Home</p>
        <ul className="nav flex-column bg-white mb-0">
            <li className="nav-items"><a href="/home" className="nav-link text-dark bg-light">
            <i className='bx bx-home' ></i>
            Home</a>
            </li>
            <li className="nav-items"><a href="/employees" className="nav-link text-dark bg-light">
            <i className='bx bx-group'></i>
            View Employees</a>
            </li>
            <li className="nav-items"><a href="/home" className="nav-link text-dark bg-light">
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
    <div className="page-content p-5" id="content">
        
        <button type='button' className="btn btn-light bglight rounded-pill shadow-sm px-4 mb-4" id="sidebarCollapser">
        <i className='bx bx-menu'></i>
        </button>
    
    </div>

    </div>


  )
}
export default Sidebar;