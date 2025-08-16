import React from 'react';

const ConfirmationDelete = ({ showConfirmModal, setShowConfirmModal, handleDelete, API_URL, serviceToDelete, setServiceToDelete, fetchServices }) => {
  return showConfirmModal && (
    <div
      className="delete-modal modal fade show d-block"
      tabIndex="-1"
      onClick={(e) => e.target.classList.contains('modal') && setShowConfirmModal(false)}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button type="button" className="btn-close" onClick={() => setShowConfirmModal(false)}></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this service? This action cannot be undone.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>Cancel</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                handleDelete(API_URL, serviceToDelete, setServiceToDelete, setShowConfirmModal, () => fetchServices(API_URL))
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDelete;