import React from 'react';
import { FontAwesomeIcon, faTh, faTable } from '../../imports/global';

const DashHeader = ({ viewType, toggleView, setForm, setEditingId, setImageCompressedMsg, setShowModal, openAddModal }) => {
  return (
    <div className="dashboard-header d-flex justify-content-between align-items-center">
      <button
        className="viewBased-btn btn btn-outline-secondary mb-3"
        onClick={() => toggleView(viewType)}
        title={`Switch to ${viewType === 'grid' ? 'Table' : 'Grid'} View`}
      >
        <FontAwesomeIcon icon={viewType === "grid" ? faTable : faTh} />
      </button>
      <button
        className="addService-button btn mb-3"
        onClick={() =>
          openAddModal(setForm, setEditingId, setImageCompressedMsg, setShowModal)
        }
      >
        + Add Service
      </button>
    </div>
  );
};

export default DashHeader;