import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';

export const Login = () => {
  const dispatch = useDispatch();

  function SubmitForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.email.value === '' || form.password.value === '') {
      alert('Please fill in all the fields');
    }
    const fetchLogIn = {
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(login(fetchLogIn));
    form.reset();
  }

  return (
    <form onSubmit={SubmitForm} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
};
