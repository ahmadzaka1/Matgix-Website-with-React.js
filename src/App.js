import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hom from "./page/Hom";
import Service from "./page/Service";
import Technology from "./page/Technology";
import Solution from "./page/Solution";
import Industry from "./page/Industry";
import Comp from "./page/Comp";
import AboutUs from "./page/AboutUs";
import Careers from "./page/Careers";
import Construction from "./page/Construction";
import Contact from "./page/Contact";
import CRM from "./page/CRM";
import DigitalMarketing from "./page/DigitalMarketing";
import Enterprise from "./page/Enterprise";
import ERP from "./page/ERP";
import ERPNext from './page/ERPNext';
import HealthCare from './page/HealthCare';
import HospitalManagementSystem from './page/HospitalManagementSystem';
import HRManagementSystem from './page/HRManagementSystem';
import Insurance from './page/Insurance';
import InventoryManagementSystem from './page/InventoryManagementSystem';
import Linkedpos from './page/Linkedpos';
import MVPdevelopment from './page/MVPdevelopment';
import Odoo from './page/Odoo';
import OurTeam from './page/OurTeam';
import ProductEngineering from './page/ProductEngineering';
import POS from './page/POS';
import ProjectManagementSystem from './page/ProjectManagementSystem';
import RestaurantManagementSystem from './page/RestaurantManagementSystem';
import RetailandEcommerce from './page/RetailandEcommerce';
import SchoolManagementSystem from './page/SchoolManagementSystem';
import SocialMediaMarketing from './page/SocialMediaMarketing';
import SportsandEntertainment from './page/SportsandEntertainment';
import SurveySoftware from './page/SurveySoftware';
import TravelandHospitality from './page/TravelandHospitality';
import TermsandConditions from "./page/TermsandConditions";
import PrivacyPolicy from "./page/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hom/>}></Route>
      <Route path="/Home" element={<Hom/>}></Route>
      <Route path="/Services" element={<Service/>}></Route>
      <Route path="/Technologies" element={<Technology/>}></Route>
      <Route path="/Solutions" element={<Solution/>}></Route>
      <Route path="/Industries" element={<Industry/>}></Route>
      <Route path="/Company" element={<Comp/>}></Route>
      <Route path="/Company/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/Company/Careers" element={<Careers/>}></Route>
      <Route path="/Industries/Construction" element={<Construction/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Solutions/CRM" element={<CRM/>}></Route>
      <Route path="/Services/Digital-Marketing" element={<DigitalMarketing/>}></Route>
      <Route path="/Services/Enterprise" element={<Enterprise/>}></Route>
      <Route path="/Solutions/ERP" element={<ERP/>}></Route>
      <Route path="/Technologies/ERPNext" element={<ERPNext/>}></Route>
      <Route path="/Industries/Healthcare" element={<HealthCare/>}></Route>
      <Route path="/Solutions/Hospital-Management-System" element={<HospitalManagementSystem/>}></Route>
      <Route path="/Solutions/HR-Management-System" element={<HRManagementSystem/>}></Route>
      <Route path="/Industry" element={<Industry/>}></Route>
      <Route path="/Industries/Insurance" element={<Insurance/>}></Route>
      <Route path="/Solutions/Inventory-Management-System" element={<InventoryManagementSystem/>}></Route>
      <Route path="/Services/Linkedpos" element={<Linkedpos/>}></Route>
      <Route path="/Services/MVP-Development" element={<MVPdevelopment/>}></Route>
      <Route path="/Technologies/Odoo" element={<Odoo/>}></Route>
      <Route path="/Company/OurTeam" element={<OurTeam/>}></Route>
      <Route path="/Technologies/Linked-POS" element={<POS/>}></Route>
      <Route path="/Services/Product-Engineering" element={<ProductEngineering/>}></Route>
      <Route path="/Solutions/Project-Management-System" element={<ProjectManagementSystem/>}></Route>
      <Route path="/Solutions/Restaurant-Management-System" element={<RestaurantManagementSystem/>}></Route>
      <Route path="/Industries/Retail-And-Ecommerce" element={<RetailandEcommerce/>}></Route>
      <Route path="/Solutions/School-Management-System" element={<SchoolManagementSystem/>}></Route>
      <Route path="/Services/Social-Media-Marketing" element={<SocialMediaMarketing/>}></Route>
      <Route path="/Industries/Sports-And-Entertainment" element={<SportsandEntertainment/>}></Route>
      <Route path="/Solutions/Survey-Software" element={<SurveySoftware/>}></Route>
      <Route path="/Industries/Travel-And-Hospitality" element={<TravelandHospitality/>}></Route>
      <Route path="/TermsandConditions" element={<TermsandConditions/>}></Route>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
