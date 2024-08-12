import '../css/style.css'
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import '../redux/store'

export const Nav = () => {
    debugger
    const userName = useSelector(u => u.currentUser)
    const manager = useSelector(m => m.manager)
    const isManager = () => {
        return userName != {} && userName.email == manager.email && userName.password == manager.password
    }
    const isUser = () => {
        return !(userName == {} || isManager())
    }
    console.log(userName.email);
    return <>
        <div className='nav'>
  <header>
    <div class="top-nav-bar">
      <div class="row">

        <div class="company-area col-md-4">
            <h4   className='category'>
                {!isUser() && !isManager() && <h1>Hello!</h1>}
                {isUser() && <h1>Hello {userName.firstName} {userName.lastName}!</h1>}
                {isManager() && <h1>hello manager!</h1>}
                {isManager() && <NavLink to={'/Category'} className='link'>categories</NavLink>}
                {isManager() && <NavLink to={'/Level'} className='link'>levels</NavLink>}
                {(isManager() )&& <NavLink to={'/MyRecipes'} className='link'>MyRecipes</NavLink>}
                {!isManager()&&userName.email!=undefined && <NavLink to={'/MyRecipes'} className='link'>MyRecipes</NavLink>}
            </h4>
        </div>
        <div class="menu-list col-md-4">
          <nav>
            <ul id="navigation">
              <li><NavLink to={'/Home1'} className='link'>Home</NavLink></li>
              <li><NavLink to={'/Login'} className='link'>Login</NavLink></li>
              <li><NavLink to={'/AllRecipe'} className='link'>AllRecipes</NavLink></li>
              <li><NavLink to={'/Register'} className='link'>Register</NavLink></li>
              <li><NavLink to={'/AddRecipe'} className='link'>add</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
      <span class="logo">
      <img src ={`${process.env.PUBLIC_URL}/images/לוגו עיגול.jpg`} alt="logo" className='logo'></img>
      </span>
    </div>
  </header>
        </div>
    </>
}