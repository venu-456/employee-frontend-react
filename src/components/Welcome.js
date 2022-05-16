import React from 'react'
import { Link } from 'react-router-dom'
export const Welcome = () => {
  return (
    <div className="container">
        <div className="row">
            <h1 className="text-center">Welcome</h1>
        <Link to= "/Login" className ="btn btn-primary">Login</Link>
        </div>
    </div>
  )
}
export default Welcome;
