import React from 'react';

const ServicesDisplay = ({ viewType, services, colorFields, handleEdit, setForm, setEditingId, setImageCompressedMsg, setShowModal, setOriginalForm, setServiceToDelete, setShowConfirmModal }) => {
  if (viewType === "grid") {
    return (
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-sm-12 col-md-6 col-lg-4 dashboard-card-col" key={service.id}>
            <div className="card dashboard-card h-100 service-item-hover">
              {service.icon && <img src={service.icon} alt="Service Icon" className="dashboard-card-img card-img-top p-3" />}
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <div className="mb-3">
                  {colorFields.map((f) => (
                    <span key={f.name} className="me-3 d-inline-flex align-items-center">
                      <span className="dashboard-card-name" style={{ backgroundColor: service[f.name] }}></span>
                      <code>{service[f.name]}</code>
                    </span>
                  ))}
                </div>
              </div>
              <div className="dashboard-card-footer card-footer border-0 d-flex justify-content-between">
                <button
                  className="editCard-button btn btn-sm text-white"
                  onClick={() => handleEdit(service, setForm, setEditingId, setImageCompressedMsg, setShowModal, setOriginalForm)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    setServiceToDelete(service.id);
                    setShowConfirmModal(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="dashboard-displayList list-group p-2">
      {services.map((service) => (
        <div key={service.id} className="list-group-item d-flex align-items-center justify-content-between service-item-hover mb-2 rounded-2">
          <div className="d-flex align-items-center">
            {service.icon && <img src={service.icon} alt="icon" className="list-img me-3"/>}
            <div>
              <h6 className="mb-1">{service.title}</h6>
              <div className="displayList-container" style={{ fontSize: '0.85rem' }}>
                {colorFields.map((f) => (
                  <span key={f.name} className="me-3 d-inline-flex align-items-center">
                    <span className="list-title" style={{ backgroundColor: service[f.name] }}></span>
                    <code>{service[f.name]}</code>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button className="editList-button btn btn-sm me-2 mb-2 mb-md-0 text-white"
              onClick={() => handleEdit(service, setForm, setEditingId, setImageCompressedMsg, setShowModal, setOriginalForm)}>
              Edit
            </button>
            <button className="btn btn-sm btn-danger"
              onClick={() => {
                setServiceToDelete(service.id);
                setShowConfirmModal(true);
              }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDisplay;