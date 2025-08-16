/* --------- Dashboard Page Functions --------- */
import colorFields from '../functions/Dashboard/colorFields';
import fetchServices from '../functions/Dashboard/fetchServices';
import getValidHex from '../functions/Dashboard/getValidHex';
import handleColorPickerChange from '../functions/Dashboard/handleColorPickerChange';
import handleChange from '../functions/Dashboard/handleChange';
import handleSubmit from '../functions/Dashboard/handleSubmit';
import handleDelete from '../functions/Dashboard/handleDelete';
import handleEdit from '../functions/Dashboard/handleEdit';
import openAddModal from '../functions/Dashboard/openAddModal';
import { getInitialView, toggleView } from "../functions/Dashboard/toggleView";


export { 
    // Dashboard Page Functions
    colorFields, fetchServices, getValidHex,
    handleColorPickerChange, handleChange,
    handleSubmit, handleDelete,
    handleEdit, openAddModal, 
    getInitialView, toggleView
};