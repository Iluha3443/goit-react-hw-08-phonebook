import { createNewUser } from '../../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

export const Register = () => {
  const dispatch = useDispatch();

  function SubmitForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      form.nameUser.value === '' ||
      form.email.value === '' ||
      form.password.value === ''
    ) {
      alert('Please fill in all the fields');
    }
    const newUser = {
      name: form.nameUser.value,
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(createNewUser(newUser));
    form.reset();
  };

  return (
    <form onSubmit={SubmitForm} autoComplete="off">
      <FormControl>
        <FormLabel htmlFor="nameUser">Name</FormLabel>
        <Input
          type="text"
          id="nameUser"
          name="nameUser"
          placeholder="Enter your name"
          size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
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
