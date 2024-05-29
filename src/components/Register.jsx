
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

    //שליפת המשתמש הנוכחי
    // const user = useSelector(u => { return u.user })
    //משתנה שיעדכן מי המשתמש הנוכחי
    // const dis = useDispatch()
    //משתנה המנתב לקומפוננטה הבאה
    const nav = useNavigate()
    //העברת נתונים מהטופס על ידי מצביע
    const lastRef = useRef()
    const firstRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    //פונקציה השומרת את הנתונים שהמשתמש הכניס
    function send() {
        getUser(emailRef.current.value, passRef.current.value)
            .then(x => {
                // אם כבר יש משתמש עם מייל וסיסמא כמו שהמשתמש הכניס
                if (x.data) {
                    swal("!לא ניתן להרשם", ".כבר קיים משמתמש בעל מייל וסיסמה אלו", "error")
                }
                //שמירת המשתמש במסד הנתונים
                else {
                    debugger
                    //יצירת המשתמש מהטופס
                    const u = {
                        lastName: lastRef.current.value,
                        firstName: firstRef.current.value,
                        email: emailRef.current.value,
                        password: passRef.current.value
                    }
                    //הוספת המשתמש למסד הנתונים
                    addUser(u).then((y) => {
                        //הנוכחי user שמירת פרטי המשתמש ב
                        // dis(setUser(y.data))
                        //ניתוב לדף הבית
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
        {/* טופס הרשמה */}
        
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
            {/* <br></br> */}
            <input id={'em'} type='email' placeholder="מייל" ref={emailRef} className='form-control'></input>
        </div>
        <br></br>
        <br></br>
        <div id="reg">
            <label htmlFor={'pw'} className='form-label'></label>
            {/* <br></br> */}
            <input type='password' id={'pw'} placeholder="סיסמה" ref={passRef} className='form-control'></input>
        </div>
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
        </div> 
        </div>
     
    </>
}