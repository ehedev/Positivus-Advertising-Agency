import axios from 'axios';
import { toast } from 'react-toastify';

const handleSubmit = async (
  e,
  API_URL,
  form,
  setForm,
  editingId,
  setEditingId,
  setImageCompressedMsg,
  setShowModal,
  fetchServices,
  originalForm
) => {
  e.preventDefault();

  if (editingId) {
    const formCopy = { ...form };
    delete formCopy.icon;
    const originalCopy = { ...originalForm };
    delete originalCopy.icon;

    if (JSON.stringify(formCopy) === JSON.stringify(originalCopy) && !form.icon) {
      toast.warning('Nothing Changed!');
      setShowModal(false);
      return;
    }
  }

  try {
    let iconUrl = '';
    const prepareAndSend = async () => {
      const payload = {
        ...form,
        icon: form.icon ? iconUrl : form.currentIcon,
      };
      delete payload.currentIcon;
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload);
        toast.success('Service Updated!');
      } else {
        await axios.post(API_URL, payload);
        toast.success('Service Added!');
      }
      setForm({
        title: '',
        bgColor: '',
        titleBg: '',
        textColor: '',
        linkColor: '',
        arrowColor: '',
        arrowBgColor: '',
        icon: null,
        currentIcon: '',
      });
      setEditingId(null);
      setImageCompressedMsg('');
      setShowModal(false);
      fetchServices();
    };
    if (form.icon) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        iconUrl = reader.result;
        await prepareAndSend();
      };
      reader.readAsDataURL(form.icon);
    } else {
      await prepareAndSend();
    }
  } catch {
    toast.error('Something went wrong');
  }
};

export default handleSubmit;