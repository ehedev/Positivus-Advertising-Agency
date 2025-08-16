import axios from 'axios';
import { toast } from 'react-toastify';

const handleDelete = async (API_URL, serviceToDelete, setServiceToDelete, setShowConfirmModal, fetchServices) => {
  if (!serviceToDelete) return;
  try {
    await axios.delete(`${API_URL}/${serviceToDelete}`);
    toast.success('Service Deleted!');
    fetchServices();
  } catch {
    toast.error('Failed to delete');
  } finally {
    setServiceToDelete(null);
    setShowConfirmModal(false);
  }
};

export default handleDelete;