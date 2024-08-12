
// export default Register;

import { useRef } from "react"
// import './api'
// import api from "./api"
// import {addUser} from "./api"

import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/action"
import swal from "sweetalert"



import "../css/register.css"
import { addUser, getUser } from "./api"
export const Register = () => {

    const nav = useNavigate()
    const lastRef = useRef()
    const firstRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    function send() {
        getUser(emailRef.current.value, passRef.current.value)
            .then(x => {
  
                if (x.data) {
                    swal("!לא ניתן להרשם", ".כבר קיים משמתמש בעל מייל וסיסמה אלו", "error")
                }
               
                else {
                    debugger
                   
                    const u = {
                        lastName: lastRef.current.value,
                        firstName: firstRef.current.value,
                        email: emailRef.current.value,
                        password: passRef.current.value
                    }
                   
                    addUser(u).then((y) => {
         
                        dis(setUser(y.data))
                     
                        nav('/Home');
                    })

                }

            })
            .catch(err => {
                console.log(err.message);
            });
    }

    return <>
     <h1 class="highlight">הרשמה</h1>
       
        
        <div class="heading-shift">
        <div className="reg">
        <br></br>
        <div id="reg" className='dd'>
            <label htmlFor={"fn"} className='form-label'></label>
            <br></br>
            <input id={'fn'} placeholder="שם משפחה" ref={lastRef} className='form-control'></input>
            <br></br>
            <br></br>
        </div>
        <div id="reg">
            <label htmlFor={"ln"} className='form-label'></label>
            <br></br>
            <input id={'ln'} placeholder="שם פרטי" ref={firstRef} className='form-control'></input>
            <br></br>
            <br></br>
        </div>
        <div id="reg">
            <label htmlFor={"em"} className='form-label'></label>
       
            <input id={'em'} type='email' placeholder="מייל" ref={emailRef} className='form-control'></input>
        </div>
        <br></br>
        <br></br>
        <div id="reg">
            <label htmlFor={'pw'} className='form-label'></label>
         
            <input type='password' id={'pw'} placeholder="סיסמה" ref={passRef} className='form-control'></input>
        </div>
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
        </div> 
        </div>
     
    </>
}