import axios from 'axios';

// Switch to live Vercel backend URL
const API_URL = 'https://backend-eight-jade-83.vercel.app';

export const createProfile = async (data: any) => {
  const response = await axios.post(`${API_URL}/profiles/`, data);
  return response.data;
};

export const fetchAndValidateJobs = async () => {
  const response = await axios.post(`${API_URL}/jobs/fetch-and-validate`);
  return response.data;
};

export const getJobMatches = async (profileId: number) => {
  const response = await axios.get(`${API_URL}/matches/${profileId}`);
  return response.data;
};
