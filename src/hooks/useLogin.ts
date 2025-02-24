import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface LoginCredentials {
  email_u: string;
  password: string;
}

const loginUser = async (credentials: LoginCredentials) => {
  const response = await axios.post('https://beta-api.batigo.fr/api/login', credentials);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};