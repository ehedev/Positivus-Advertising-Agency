import axios from 'axios';
import { toast } from 'react-toastify';

const fetchServices = async (API_URL, setServices) => {
  try {
    const res = await axios.get(API_URL);
    setServices(res.data);
  } catch {
    toast.error('Failed to fetch services');
  }
};

export default fetchServices;