import css from './Home.module.css';

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>Welcome to the main page</h1>
    </div>
  );
};