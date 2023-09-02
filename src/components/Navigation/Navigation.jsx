import { Link } from 'react-router-dom';
import css from './Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useSelector } from 'react-redux';


export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={css.navList}>
      <Link className={css.home} to="/">Home</Link>
      {isLoggedIn && <Link className={css.home} to="/contacts">Contacts</Link>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};
