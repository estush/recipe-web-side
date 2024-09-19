// Login.js

import swal from "sweetalert";
import { getUser } from "./js/api";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setManager } from "../redux/action";
import { useNavigate } from 'react-router-dom';
import '../css/log.css';


export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const manager = useSelector(state => state.manager);

    const send = (event) => {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;

        const user = { email, password };

        getUser(user.email, user.password)
            .then(response => {
                if (!response.data || response.data == "") {
                    swal("ההתחברות נכשלה!", "גש להרשמה", "error");
                    navigate('/Register'); // תיקון נתיב
                } else if (response.data.email == manager.email && response.data.password == manager.password) {
                    dispatch(setManager(response.data));
                    console.log(manager.firstName)
                    swal(`ברוך הבא מנהל!`, "ההתחברות הצליחה", "success"); // תיקון שימוש במילוי מחרוזות
                    navigate('/Home1'); // תיקון נתיב
                } else {
                    dispatch(setCurrentUser(response.data));
                    swal(`ברוך הבא ${response.data.firstName}!`, "ההתחברות הצליחה", "success"); // תיקון שימוש במילוי מחרוזות
                    navigate('/Home1'); // תיקון נתיב
                }
            })
            .catch(err => {
                console.error("שגיאה במהלך ההתחברות:", err);
                swal("ההתחברות נכשלה!", "נסה שוב מאוחר יותר", "error");
            });
    };

    return (
        <div className="ring">
            <i></i>
            <i></i>
            <i></i>
            <div className="login">
                <h1>login</h1>
                <form onSubmit={send} className="login">
                    <div>
                        <label htmlFor='un'></label>
                        <div className="inputBx">
                            <input id='un' placeholder="enter email " />
                        </div>
                        <label htmlFor='pw'></label>
                        <div className="inputBx">
                            <input type="password" id='pw' placeholder="enter password" />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value='login' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
