import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operation';
import {
  Box,
  Text,
  Button,
} from '@chakra-ui/react';

export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

   return (
    <Box className="email" p="4" borderWidth="1px" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" mb="2">
        {user.email}
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        colorScheme="red" 
      >
        Logout
      </Button>
    </Box>
  );
};







