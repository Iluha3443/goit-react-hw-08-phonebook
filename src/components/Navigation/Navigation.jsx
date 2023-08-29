import { Link } from "react-router-dom";
import css from './Navigation.module.css';
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getIsLoggedIn } from "components/redux/redux-auth/auth-selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={css.navList}>
      <Link to='/contacts'>Contacts</Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  )
};
