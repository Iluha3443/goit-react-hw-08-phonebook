import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

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
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          size="md"
        />
      </FormControl>
      <Button
        type="submit"
        colorScheme="blue"
        mt={4}
      >
        Submit
      </Button>
    </form>
  );
};

