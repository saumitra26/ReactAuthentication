import React from 'react'
import {useState} from 'react'


const Login = () => {
    const [signum,setSignum]=useState('');
    const [password,setPassword]=useState('');
    const submit=async(e)=>{
        e.preventDefault();
        await fetch('http://localhost:5000/api/auth/login/',{
            mode: 'cores',
            method:'POST',
            credentials:'include',
            headers: ({
                'Content-Type': 'application/json'}),
            body: JSON.stringify({
                Signum: signum,
                Password: password
              })
        });
       
    }

    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <input type="text" className="form-control"  name="Signum"  required
            onChange={(e)=>(setSignum(e.target.value))}
          />
          <input type="password" className="form-control" name="Password"  placeholder="Password" required
            onChange={(e)=>(setPassword(e.target.value))}
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
       </form>
    )
}

export default Login
