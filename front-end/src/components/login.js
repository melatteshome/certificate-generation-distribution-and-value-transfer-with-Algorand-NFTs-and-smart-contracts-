import React, {  useState } from "react";
import { useNavigate, } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function HandleSubmit(e) {
        e.preventDefault();
 

        fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    console.log(data);
          
                    if (data.role === "user") {
                      navigate("/admin");
                    } else if (data.role === "admin") {

                      navigate("/admin");
                    } else {
                      // Handle other roles or actions
                    }
                  } else {
                    // Handle unsuccessful login
                  }
            })
            .catch((error) => {
              console.log('errrrrr')
            });
        };


        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={HandleSubmit}>
                        <h3>Sign In</h3>

                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }