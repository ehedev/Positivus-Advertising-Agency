import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';

const handleChange = async (e, setForm, setImageCompressedMsg) => {
  const { name, value, files } = e.target;
  if (name === 'icon' && files[0]) {
    const file = files[0];
    if (file.size > 1024 * 1024) {
      toast.error('Image too large! Max 1MB before compression');
      return;
    }
    try {
      const options = {
        maxSizeMB: 0.05,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      setForm((prev) => ({
        ...prev,
        icon: compressedFile,
      }));
      setImageCompressedMsg(`Image compressed to ${(compressedFile.size / 1024).toFixed(1)} KB`);
    } catch {
      toast.error('Failed to compress image');
    }
  } else {
    setForm((prev) => ({ ...prev, [name]: value }));
  }
};

export default handleChange;