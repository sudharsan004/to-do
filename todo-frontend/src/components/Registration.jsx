import React from 'react'
import "./log-reg.css"

function Registration() {
    fetch('http://127.0.0.1:8000/api/todo/')
    .then(r=>r.json())
    .then(result=>console.log(result))
    return (
        <div className="card">
            <h1 className="text-center mb-1">Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="fullName">Fullname</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="fullName" 
                        placeholder="Enter your Fullname" 
                        spellCheck="false"
                        autoCorrect="off"
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mail">E-mail</label>
                    <input 
                        type="email"
                        className="form-control" 
                        id="mail" 
                        placeholder="Enter your Mail-id" 
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Createpassword">Create Password</label>
                    <input 
                        type="password"
                        className="form-control" 
                        id="Createpassword" 
                        placeholder="Enter Password" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Confirmpassword">Confirm Password</label>
                    <input 
                        type="password"
                        className="form-control" 
                        id="Confirmpassword" 
                        placeholder="Enter Password" 
                    />
                </div>
                <button className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Registration
