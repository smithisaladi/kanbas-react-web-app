import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container" style={{ maxWidth: '400px', marginTop: '20px' }}>
      <h1>Signup</h1>
      
      <input 
        placeholder="username" 
        className="form-control mb-3" 
      />
      
      <input 
        placeholder="password" 
        type="password" 
        className="form-control mb-3" 
      />
      
      <button 
        className="btn btn-primary btn-block" 
        style={{ width: '100%' }}
      >
        Signup
      </button>
      
      <Link 
        to="/Kanbas/Account/Signin" 
        className="d-block mt-3" 
        style={{ textAlign: 'left', color: 'blue' }}
      >
        Signin
      </Link>
    </div>
  );
}
