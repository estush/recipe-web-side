import swal from "sweetalert";
import api, { getUser } from "./api";
// import '../css/login.css'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/action";
import { Nav } from "./Nav";
import { colors } from "@mui/material";
import '../css/log.css'

export const Login = () => {
    debugger
    let dis = useDispatch()
    const manager = useSelector(m => m.manager)
    const send = (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        debugger
        console.log(event.target[0].value);
        const user = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        getUser(user.email, user.password)
            .then(x => {
                debugger
                if (x.data == "") {
                    debugger
                    swal("login failed!", "go to register", "error")
                    Nav(`/Register`)
                }
                else if (user.password == manager.password && user.email == manager.email) {
                    dis(setCurrentUser(x.data))
                    
                    swal(`Welcom manager!`, "login successfuly", "success")
                    Nav(`/Home1`)


                }
                else {
                    dis(setCurrentUser(x.data))
                    swal(`Welcome ${x.data.firstName}!`, "login successfuly", "success")
                    Nav(`/Home1`)

                }
            })
            .catch(err => {
                alert("eror")
                //  swal("login failed!", "try later", "error")
            })
    }

    return <>
        <div className="ring">
            <i style={colors} ></i>
            <i ></i>
            <i ></i>
            <div className="login">
                <h1>התחברות</h1>
                <form onSubmit={(e) => send(e)} className="login">
                    <div>
                        <label htmlFor={'un'}></label>
                        <div className="inputBx"> <input id={'un'} placeholder="input email "></input></div>
                        <label htmlFor={'pw'}></label>
                        <div className="inputBx"> <input type="password" id={'pw'} placeholder="input password"></input></div>
                        <div className="inputBx"><input type="submit"  value={'send'}></input></div> 
                    </div>
                </form>
            </div>

        </div>
    </>
}
