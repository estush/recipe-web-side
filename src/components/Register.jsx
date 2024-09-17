
// export default Register;

import { useRef } from "react"

import { useNavigate } from "react-router"
import { useDispatch,  } from "react-redux"
import { setCurrentUser } from "../redux/action"
import swal from "sweetalert"



import "../css/register.css"
import { addUser, getUser } from "./js/api"
export const Register = () => {
    let dis = useDispatch();
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
                    const u = {
                        lastName: lastRef.current.value,
                        firstName: firstRef.current.value,
                        email: emailRef.current.value,
                        password: passRef.current.value
                    }
                   
                    addUser(u).then((y) => {
                        dis(setCurrentUser(y.data))
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