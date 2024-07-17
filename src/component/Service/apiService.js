import axios from 'axios';

const API_URL = 'https://benzel-sb.yeems214.xyz';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (accDetails) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, accDetails);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
