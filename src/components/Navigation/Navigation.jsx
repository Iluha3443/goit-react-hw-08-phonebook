import { Link } from "react-router-dom";
import css from './Navigation.module.css';
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Navigation = () => {
 const isLoggedIn = useSelector(state => state.auth.auth.isLoggedIn);

  return (
    <nav className={css.navList}>
      <Link to='/'>Home</Link>
       {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  )
};
