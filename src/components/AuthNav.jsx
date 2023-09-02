import { Link } from "react-router-dom";
import css from "./AuthNav.module.css"

 export const AuthNav = () => {
    return (
        <div className={css.navig}>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </div>
    )
 };