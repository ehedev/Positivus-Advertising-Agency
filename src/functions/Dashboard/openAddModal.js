const openAddModal = (setForm, setEditingId, setImageCompressedMsg, setShowModal) => {
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
    setShowModal(true);
  };
  
export default openAddModal;