import { useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/action";
import swal from "sweetalert";
import "../css/register.css";
import { addUser, getUser } from "./js/api";

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lastNameRef = useRef();
    const firstNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit() {
        // Check if the user already exists
        getUser(emailRef.current.value, passwordRef.current.value)
            .then(response => {
                if (response.data) {
                    swal("Registration Failed!", "A user with this email and password already exists.", "error");
                } else {
                    // Create a new user object
                    const user = {
                        lastName: lastNameRef.current.value,
                        firstName: firstNameRef.current.value,
                        email: emailRef.current.value,
                        password: passwordRef.current.value
                    };
                    // Add the new user and redirect to Home
                    addUser(user).then((newUser) => {
                        dispatch(setCurrentUser(newUser.data));
                        navigate('/Home');
                    });
                }
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    return (
        <div className="register-body">
            <h1 className="register-title">Join Us :)</h1>
            <div className="register-container">
                <div className="register-dynamic-width">
                    <input id='lastName' placeholder="Last Name" ref={lastNameRef} className='register-input' />
                    <input id='firstName' placeholder="First Name" ref={firstNameRef} className='register-input' />
                    <input id='email' type='email' placeholder="Email" ref={emailRef} className='register-input' />
                    <input type='password' id='password' placeholder="Password" ref={passwordRef} className='register-input' />
                    <button className="register-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};
