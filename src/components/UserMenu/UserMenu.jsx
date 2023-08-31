import { useSelector } from "react-redux/es/hooks/useSelector";
import css from './UserMenu.module.css';
import { useDispatch } from "react-redux";
import { logOut } from "components/redux/redux-auth/auth-operation";


export const UserMenu = () => {
    const user = useSelector(state => state.auth.auth.user);
    const dispatch = useDispatch();

    return (
        <div className={css.email}>
            <p>{user.email}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}