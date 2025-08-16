import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import {
  DashHeader, Modal, ServicesDisplay, ConfirmationDelete
} from "../../imports/components";

import {
  colorFields, fetchServices, getValidHex,
  handleColorPickerChange, handleChange, handleSubmit,
  handleDelete, handleEdit, openAddModal,
  getInitialView, toggleView,
} from "../../imports/functions";

const API_URL = 'https://6889cca94c55d5c7395398fb.mockapi.io/api/services';

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    title: '',
    bgColor: '',
    titleBg: '',
    textColor: '',
    linkColor: '',
    arrowColor: '',
    arrowBgColor: '',
    icon: null,
    currentIcon: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [, setImageCompressedMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const [viewType, setViewType] = useState(getInitialView());
  const [originalForm, setOriginalForm] = useState({});

  useEffect(() => {
    fetchServices(API_URL, setServices);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (showModal || showConfirmModal) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal, showConfirmModal]);

  return (
    <div className="dashboard container py-5">
      <ToastContainer autoClose={1000} />
      <h2 className="text-center mb-4">Positivus Admin Dashboard - Manage Services</h2>

      <DashHeader
        navigate={navigate}
        viewType={viewType}
        toggleView={() => toggleView(viewType, setViewType)}
        setForm={setForm}
        setEditingId={setEditingId}
        setImageCompressedMsg={setImageCompressedMsg}
        setShowModal={setShowModal}
        openAddModal={openAddModal}
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmit={handleSubmit}
        API_URL={API_URL}
        form={form}
        setForm={setForm}
        editingId={editingId}
        setEditingId={setEditingId}
        setImageCompressedMsg={setImageCompressedMsg}
        fetchServices={(url) => fetchServices(url, setServices)}
        originalForm={originalForm}
        colorFields={colorFields}
        handleChange={handleChange}
        getValidHex={getValidHex}
        handleColorPickerChange={handleColorPickerChange}
      />

      <ServicesDisplay
        viewType={viewType}
        services={services}
        colorFields={colorFields}
        handleEdit={handleEdit}
        setForm={setForm}
        setEditingId={setEditingId}
        setImageCompressedMsg={setImageCompressedMsg}
        setShowModal={setShowModal}
        setOriginalForm={setOriginalForm}
        setServiceToDelete={setServiceToDelete}
        setShowConfirmModal={setShowConfirmModal}
      />

      <ConfirmationDelete
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={setShowConfirmModal}
        handleDelete={handleDelete}
        API_URL={API_URL}
        serviceToDelete={serviceToDelete}
        setServiceToDelete={setServiceToDelete}
        fetchServices={(url) => fetchServices(url, setServices)}
      />
    </div>
  );
};

export default Services;