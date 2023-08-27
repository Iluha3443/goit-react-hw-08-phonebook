import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
              <Link to='/contacts'>Contacts</Link>
                </li>
                 <li>
              <Link to='/register'>Contacts</Link>
                </li>
                 <li>
              <Link to='/login'>Contacts</Link>
                </li>
            </ul>
        </nav>
        
    )
}