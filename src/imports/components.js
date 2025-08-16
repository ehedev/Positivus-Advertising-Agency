/* --------- Home Page Components --------- */
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Partners from '../components/Home/Partners';
import Services from '../components/Home/Services';
import CaseStudies from '../components/Home/CaseStudies';
import Process from '../components/Home/Process';
import Team from '../components/Home/Team';
import Footer from '../components/Home/Footer';

/* --------- Global Components --------- */
import { ThemeToggle, ThemeSwitch } from '../components/Global/ThemeToggle';
import ScrollToTopButton from '../components/Global/ScrollToTopButton';

/* --------- Dashboard Page Components --------- */
import DashHeader from '../components/Dashboard/DashHeader';
import Modal from '../components/Dashboard/Modal';
import ServicesDisplay from '../components/Dashboard/ServicesDisplay';
import ConfirmationDelete from '../components/Dashboard/ConfirmationDelete';
import SidebarNav from "../components/Dashboard/SidebarNav";


export { 
    // Home Page Components
    Header, Hero, Partners, 
    Services, CaseStudies, Process, 
    Team, Footer,

    // Global Components
    ThemeToggle, ThemeSwitch, ScrollToTopButton,

    // Dashboard Page Components
    DashHeader, Modal, 
    ServicesDisplay, ConfirmationDelete,
    SidebarNav
};