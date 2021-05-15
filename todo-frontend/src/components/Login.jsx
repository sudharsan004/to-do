import React from 'react'
import './log-reg.css'

const Login = () => {
    return (
        <div className="card">
            <h1 className="text-center mb-4">Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="userName" 
                        placeholder="Enter your Username" 
                        spellCheck="false"
                        autoCorrect="off"
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        className="form-control" 
                        id="password" 
                        placeholder="Enter your Password" 
                    />
                </div>
                <button className="btn btn-primary">login</button>
            </form>
            <a className="text-center mt-3">Have no account?-Create an account</a>
        </div>
    )
}

export default Login
