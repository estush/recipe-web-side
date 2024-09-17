// Nav.js

import '../css/style.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Nav = () => {
    const userName = useSelector(state => state.currentUser) || {};
    const manager = useSelector(state => state.manager) || {};

    const isManager = () => {
        return manager.firstName!=null
    };

    const isUser = () => {
        return userName.firstName!=null&& !isManager();
    };

    return (
        <div className='top-nav-bar'>
            <header>
                <div className='row'>
                    <div className='company-area'>
                        <h4 className='category'>
                            {userName.email == "anonimi@gmail.com" && !isManager() && <h1>login to get more!</h1>}
                            {isUser()  && <h1>{userName.firstName}</h1>}
                            {isManager() && <h1>admin</h1>}
                            {isManager() && <NavLink to='/Category' className='link'>categories</NavLink>}
                            {isManager() && <NavLink to='/Level' className='link'>levels</NavLink>}
                            {(isManager()||isUser())&& <NavLink to='/MyRecipes' className='link'>my recipes</NavLink>}
                        </h4>
                    </div>
                    <div className='menu-list'>
                        <nav>
                            <ul id="navigation">
                                <li><NavLink to='/Home1' className='link'>home</NavLink></li>
                                <li><NavLink to='/Login' className='link'>login</NavLink></li>
                                <li><NavLink to='/AllRecipe' className='link'>all recipes</NavLink></li>
                                <li><NavLink to='/Register' className='link'>register</NavLink></li>
                                {(isManager()||isUser())&&<li><NavLink to='/AddRecipe' className='link'>add</NavLink></li>}
                              
                            </ul>
                        </nav>
                    </div>
                </div>
                <span className='logo'>
                    <img src={`${process.env.PUBLIC_URL}/images/לוגו עיגול.jpg`} alt="logo" />
                </span>
            </header>
        </div>
    );
};
