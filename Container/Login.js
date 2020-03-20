import React from 'react'
import ReactDOM from 'react-dom';
import "../Styles/Login.scss";
const Login = props => (
    <div className="row allign-items-center login-container">
        <div className="d-none d-md-block col-md-8 text-center logo-container">
            <img src="https://image.flaticon.com/icons/svg/2111/2111463.svg" width="200px" height="200px"></img>
            <h1>Instagram</h1>
        </div>

        <div className=" col-12 col-md-4 text-center form-container">
            <div className="form-items">
                <h1>Instagram</h1>
                <form>
                    <div className="form-group-row">
                        <input type="text" className="form-control" placeholder="username or e-mail"></input>
                        <br></br>
                        <input type="password" placeholder="Password" className="form-control"></input>
                        <br></br>
                        <button className="btn btn-primary login-button">Sign in</button>
                    </div>
                </form>
                <hr></hr>
                <p>Or</p>
                <a href="#"><img src="https://image.flaticon.com/icons/svg/124/124010.svg" width="17px" height="17px"></img>  Login with Facebook</a>
                <p>Forgot Password?</p>

            </div>


        </div>
    </div>
)
export default Login;
