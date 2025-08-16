import React from 'react';
import { FontAwesomeIcon, faArrowRight } from '../../imports/global';

const Modal = ({
  showModal, setShowModal, handleSubmit, API_URL, form, setForm,
  editingId, setEditingId, setImageCompressedMsg, fetchServices,
  originalForm, colorFields, handleChange, getValidHex, handleColorPickerChange
}) => {
  return showModal && (
    <div
      className={`dashboard-modal modal fade show d-block`}
      tabIndex="-1"
      role="dialog"
      onClick={(e) => e.target.classList.contains('modal') && setShowModal(false)}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content modal-custom">
          <form
            onSubmit={(e) =>
              handleSubmit(
                e, API_URL, form, setForm, editingId, setEditingId,
                setImageCompressedMsg, setShowModal, () => fetchServices(API_URL),
                originalForm
              )
            }
          >
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title">{editingId ? 'Edit Service' : 'Add Service'}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body row g-3 mt-2">
              <div className="col-12">
                <label className="form-label">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={(e) => handleChange(e, setForm, setImageCompressedMsg)}
                  className="form-control"
                  placeholder="ex. Service Name"
                  required
                />
              </div>

              {colorFields.map((field) => (
                <div className="col-12" key={field.name}>
                  <label className="form-label">{field.label}</label>
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      name={field.name}
                      value={form[field.name]}
                      onChange={(e) => handleChange(e, setForm, setImageCompressedMsg)}
                      className="form-control"
                      placeholder="ex. black or #000000"
                      required
                    />
                    <input
                      type="color"
                      value={getValidHex(form[field.name] || '#000000')}
                      onChange={(e) => handleColorPickerChange(field.name, e.target.value, setForm)}
                      className="form-control form-control-color"
                    />
                  </div>
                </div>
              ))}

              <div className="col-12">
                <label className="form-label">Image (icon)</label>
                <input
                  type="file"
                  name="icon"
                  accept="image/*"
                  onChange={(e) => handleChange(e, setForm, setImageCompressedMsg)}
                  className="form-control"
                  required={!editingId}
                />
                {form.currentIcon && !form.icon && (
                  <div className="mt-2">
                    <img src={form.currentIcon} alt="Current icon" className="modal-icon-preview" />
                  </div>
                )}
                {form.imageCompressedMsg && (
                  <small className="text-success d-block mt-1">{form.imageCompressedMsg}</small>
                )}
              </div>

              {/* Live Preview */}
              <div className="live-preview col-12 mt-4">
                <h6>Live Preview:</h6>
                <div
                  className="preview p-4"
                  style={{
                    backgroundColor: form.bgColor || '#ffffff',
                    color: form.textColor || '#000000'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start" style={{ gap: '20px' }}>
                    <h5
                      style={{
                        backgroundColor: form.titleBg || '#b9ff66',
                        color: form.textColor || '#000000'
                      }}
                    >
                      {form.title || 'Service Title'}
                    </h5>
                    <img
                      className="preview-image"
                      alt="Preview Icon"
                      src={
                        form.icon
                          ? URL.createObjectURL(form.icon)
                          : form.currentIcon || 'https://placehold.co/600x400?text=Your+Icon+\nGoes+Here'
                      }
                    />
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-4">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: form.arrowBgColor || '#000000',
                        width: '40px',
                        height: '40px'
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowRight} style={{ color: form.arrowColor || '#ffffff', transform: 'rotate(-45deg)' }} />
                    </div>
                    <span style={{ color: form.linkColor || '#0000ee' }}>Learn More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="cancel-button btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="submit" className="submit-button btn">
                {editingId ? 'Update Service' : 'Add Service'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;