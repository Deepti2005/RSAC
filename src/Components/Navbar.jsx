import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';  // Assuming you add custom CSS here

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="nav-link" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="aboutUsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="aboutUsDropdown">
                <a className="dropdown-item" href="#about-us">About Us</a>
                <a className="dropdown-item" href="#visitors-book">Visitor's Book</a>
                <a className="dropdown-item" href="#organisational-chart">Organisational Chart</a>
                <div className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#our-formers">Our Formers</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#chairman-governing-body">Chairman Governing Body</a>
                    <a className="dropdown-item" href="#director">Director</a>
                    <a className="dropdown-item" href="#scientist">Scientist</a>
                  </div>
                </div>
                <a className="dropdown-item" href="#scientific-manpower">Scientific Manpower</a>
                <a className="dropdown-item" href="#administrative-and-auxiliary-staff">Administrative And Auxiliary Staff</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="divisionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Divisions
              </a>
              <div className="dropdown-menu" aria-labelledby="divisionsDropdown">
                <a className="dropdown-item" href="#Agriculture Resources  Devision">Agriculture Resources  Devision</a>
                <a className="dropdown-item" href="#Computer Image Processing Devision">Computer Image Processing Devision</a>
                <a className="dropdown-item" href="#Earth Resources Devision">Earth Resources Devision</a>
                <a className="dropdown-item" href="#Forest  Resources Division">Forest  Resources Division</a>
                <a className="dropdown-item" href="#Groundwater Resources Devision3">Groundwater Resources Devision</a>
                <a className="dropdown-item" href="#Geo-Spatial Data Bank Division">Geo-Spatial Data Bank Division</a>
                <a className="dropdown-item" href="#Landuse & Urban Survey Divison">Landuse & Urban Survey Divison </a>
                <a className="dropdown-item" href="#Soil Resources Division">Soil Resources Division</a>
                <a className="dropdown-item" href="Surface Water Resources Division">Surface Water Resources Division</a>
                <a className="dropdown-item" href="#Traning Division">Traning Division</a>
                <a className="dropdown-item" href="#School of Geo-Information">School of Geo-Information</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="facilitiesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Facilities
              </a>
              <div className="dropdown-menu" aria-labelledby="facilitiesDropdown">
                <a className="dropdown-item" href="#facility1">Geoinformatics Facilities</a>
                <a className="dropdown-item" href="#facility2">Water Analysis Lab </a>
                <a className="dropdown-item" href="#facility3">Soil Analysis Lab</a>
                <a className="dropdown-item" href="#facility3">Data Bank</a>
                <a className="dropdown-item" href="#facility3">Technical cell</a>
                <a className="dropdown-item" href="#facility3">Library</a>
                <a className="dropdown-item" href="#facility3">Cartography & Repography</a>
                <a className="dropdown-item" href="#facility3">Training Hostels</a>
                <a className="dropdown-item" href="#facility3">Service Block</a>
                <a className="dropdown-item" href="#facility3">LiDAR & Bathymetry</a>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="academicsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Academics
              </a>
              <div className="dropdown-menu" aria-labelledby="academicsDropdown">
                <a className="dropdown-item" href="#School of Geo-Informatics">School of Geo-Informatics</a>
                <a className="dropdown-item" href="#Training Division">Training Division</a>
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="geoPortalDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Geo-Portal
              </a>
              <div className="dropdown-menu" aria-labelledby="geoPortalDropdown">
                <a className="dropdown-item" href="PM Gati Shakti">PM Gati Shakti</a>
                <a className="dropdown-item" href="#Pahuch">Pahuch</a>
                <a className="dropdown-item" href="#Bhuvan">Bhuvan</a>
                <a className="dropdown-item" href="#NGDR">NGDR</a>
                <a className="dropdown-item" href="#Samvedan">Samvedan</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="floodDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Flood
              </a>
              <div className="dropdown-menu" aria-labelledby="floodDropdown">
                <a className="dropdown-item" href="#flood 2024">Flood 2024</a>
                <a className="dropdown-item" href="#flood 2023">Flood 2023</a>
                <a className="dropdown-item" href="#flood 2022">Flood 2022</a>
                <a className="dropdown-item" href="#flood 2021">Flood 2021</a>
                <a className="dropdown-item" href="#flood 2020">Flood 2020</a>
                <a className="dropdown-item" href="#flood 2019">Flood 2019</a>
                <a className="dropdown-item" href="#flood 2018">Flood 2018</a>
                <a className="dropdown-item" href="#flood 2017">Flood 2017</a>
                <a className="dropdown-item" href="#flood 2016">Flood 2016</a>
                <a className="dropdown-item" href="Flood Critical Map">Flood Critical Map</a>
                
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#photo-gallery">Photo Gallery</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="rtiDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                RTI
              </a>
              <div className="dropdown-menu" aria-labelledby="rtiDropdown">
                <a className="dropdown-item" href="#Appellate Authority">Appellate Authority</a>
                <a className="dropdown-item" href="#Memorandum of Association">Memorandum of Association </a>
                <a className="dropdown-item" href="#General Service Rules">General Service Rules</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tender">Tender</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="contactUsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact Us
              </a>
              <div className="dropdown-menu" aria-labelledby="contactUsDropdown">
                <a className="dropdown-item" href="#Contact Details">Contact Details</a>
                <a className="dropdown-item" href="#Feedback">Feedback</a>
               
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
