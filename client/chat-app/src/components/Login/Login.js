import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    
    return (
        <div className="container">
        <div className="card card-login mx-auto text-center bg-dark">
             <div className="card-header mx-auto bg-dark">
                  <span> <img src="https://amar.vote/assets/img/amarVotebd.png" className="w-75" alt="Logo"/> </span><br/>
                  <span className="logo_title mt-5"> Login Dashboard </span>
              </div>
             <div className="card-body">
                  <form >
                      <div className="input-group form-group">
                           <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fas fa-user"></i></span>
                           </div>
                            <input type="text" name="username" className="form-control" placeholder="Username"
                            onChange={(event) => setUsername(event.target.value)}
                            />
                         </div>
                       <div className="input-group form-group">
                            <div className="input-group-prepend">
                                 <span className="input-group-text"><i className="fas fa-key"></i></span>
                              </div>
                            <input type="password" name="password" className="form-control" placeholder="Password"/>
                       </div>
                       <div className="form-group">
                       <Link onClick={e => (!username) ? e.preventDefault() : null} to={`/chat?username=${username}`}>
                        <input type="submit" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn"/>
                       </Link>
                           
                           </div>
                   </form>
                </div>
          </div>
      </div>
 
    );
  }
  
  export default Login;