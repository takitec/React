import axios from 'axios';

const API_URL = 'https://benzel-sb.yeems214.xyz';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (id, username, email, password, confirmPass) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { id, username, email, password, confirmPass });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
