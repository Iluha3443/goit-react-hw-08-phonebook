import { Link } from "react-router-dom";

export const AuthNav = () => {
    return (
        <div>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </div>
    )
}