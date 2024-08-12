import swal from "sweetalert";
import api, { getUser } from "./api";
// import '../css/login.css'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/action";
import { Nav } from "./Nav";
import { colors } from "@mui/material";
import '../css/log.css'
import { GoogleLogin } from "@react-oauth/google";

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

                 swal("login failed!", "try later", "error")
            })
    }
    const onSuccess = (googleUser) => {
        console.log('Login Success:', googleUser);
        const credentials = jwtDecode<GoogleCredentials>(googleUser.credential);
        console.log(credentials);
        LoginWithGoogle(credentials.email).then((response) => {
          if (response.status === 200) {
            const x = response;
            console.log(x);
            console.log(x.data);
            Swal.fire('Success', 'התחברת בהצלחה', 'success');
            dispatch(setUser(x.data.userEmail, x.data.userPassword, x.data.id, x.data.userType.id, x.data.userType.description, x.data.firstName, x.data.lastName));
            sessionStorage.setItem("userId", x.data.id);
            sessionStorage.setItem("userType", x.data.userType.description);
    
            if (x.data.userType.description === "customer")
              navigate("/projectStatus");
            else if (x.data.userType.description === "admin"){
              debugger
              navigate("/leads");}
            else
              navigate("/leads");
    
          } else {
            Swal.showValidationMessage('מייל וסיסמא לא קיימים');
          }
        })
          .catch((error) => {
            console.log(error);
            Swal.fire("error", 'שגיאה בהתחברות', 'error');
          });
    
      };
    
      const onFailure = () => {
        console.log('Login Failed');
      };
    return <>
        <div className="ring">
            <i style={colors} ></i>
            <i ></i>
            <i ></i>
            <div className="login">
                <h1>התחברות</h1>
                <GoogleOAuthProvider clientId="1079513751617-cvu5tvh0ggnogkvj8im50op7gocnehrj.apps.googleusercontent.com">
        <div id='login2'>
          <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
          />
        </div>
      </GoogleOAuthProvider>
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
