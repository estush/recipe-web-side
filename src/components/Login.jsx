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
                if (!response.data || response.data === "") {
                    swal("Login failed!", "Please register", "error");
                    navigate('/Register'); // Navigate to the registration page
                } else if (response.data.email === manager.email && response.data.password === manager.password) {
                    dispatch(setManager(response.data));
                    console.log(manager.firstName);
                    swal(`Welcome, Manager!`, "Login successful", "success"); // Welcome message for the manager
                    navigate('/Home1'); // Navigate to the home page
                } else {
                    dispatch(setCurrentUser(response.data));
                    swal(`Welcome, ${response.data.firstName}!`, "Login successful", "success"); // Welcome message for the user
                    navigate('/Home1'); // Navigate to the home page
                }
            })
            .catch(err => {
                console.error("Error during login:", err);
                swal("Login failed!", "Please try again later", "error");
            });
    };

    return (
        <div className="ring">
            <i></i>
            <i></i>
            <i></i>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={send} className="login">
                    <div>
                        <label htmlFor='un'></label>
                        <div className="inputBx">
                            <input id='un' placeholder="Enter email" />
                        </div>
                        <label htmlFor='pw'></label>
                        <div className="inputBx">
                            <input type="password" id='pw' placeholder="Enter password" />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value='Login' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
