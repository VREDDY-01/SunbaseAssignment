import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [login_id, setLogin_id] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    const res = await fetch(`http://localhost:8080/authenticate?loginId=${login_id}&password=${password}`,{
      mode:"cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let a = await res.json();
    if (res.status === 200) {
      localStorage.setItem("token",a.access_token);   
      navigate("/customers");
    }else{
      setLogin_id("");
      setPassword("");
    }
  }
  return (
    <div>
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit} method='post'>
            <label htmlFor="login_id">Username:</label>
            <input type="text" id="login_id" name="login_id" onChange={e=>setLogin_id(e.target.value)} value={login_id} required/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={e=>setPassword(e.target.value)} value={password} required/>
            <br/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login