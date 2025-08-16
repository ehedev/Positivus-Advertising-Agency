const handleEdit = (service, setForm, setEditingId, setImageCompressedMsg, setShowModal, setOriginalForm) => {
  const serviceForm = {
    title: service.title,
    bgColor: service.bgColor,
    titleBg: service.titleBg,
    textColor: service.textColor,
    linkColor: service.linkColor,
    arrowColor: service.arrowColor,
    arrowBgColor: service.arrowBgColor,
    icon: null,
    currentIcon: service.icon,
  };
  setForm(serviceForm);
  setOriginalForm(serviceForm);
  setEditingId(service.id);
  setImageCompressedMsg('');
  setShowModal(true);
};
  
export default handleEdit;