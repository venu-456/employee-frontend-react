import React from 'react'

const profile = () => {
  return (
 
      <div className="card mx-auto w-50 p-3" >
  <img src="/images/venu.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Venugopal reddy</h5>
    <p className="card-text">tell us something about your-self to make it visible here</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Developer</li>
    <li className="list-group-item">Al143</li>
    
  </ul>
  <div class="card-body">
    <a href="/home" className="card-link btn btn-info">Apply leave</a>
    <a href="/home" className="card-link btn btn-success">Edit Profile</a>
  </div>
</div>

  )
}
export default profile;


