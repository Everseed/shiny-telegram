import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
});

export const sendMagicLink = async (email: string) => {
  return api.post('/auth/login', { email });
};

export const verifyMagicLink = async (token: string) => {
  return api.get(`/auth/verify?token=${token}`);
}; 