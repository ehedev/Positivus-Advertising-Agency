const handleColorPickerChange = (name, value, setForm) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  export default handleColorPickerChange;