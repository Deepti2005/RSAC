// src/components/IIMAHappenings.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards2.css'; // For custom styling if needed

const IIMAHappenings = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">  
          <h2 className="title"><u>Remote Sensing Application Center,UP Lucknow</u></h2>
          <div className="card mb-4">
            <img src="https://educationdunia.com/public/storage/college/banner_lgsjtzyj.5c4efb40a7bb8.jpg" className="card-img-top" alt="IIMA Event" />
            <div className="name">
              <h5 className="card-title">Main Front view of RSAC office in Lucknow Uttar Pradesh</h5>
              {/* <a href="#" className="stretched-link"></a> */}
            </div>
            <div className="card-footer text-end">
              <a href="#" className="btn btn-link text-danger">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h2>News And Events</h2>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6>“Do not focus on the outcome, rather practice excellence in everyday l...</h6>
                <small className="text-muted">22/07/2024</small>
              </div>
              <a href="#" className="stretched-link"></a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6>Business Inflation Expectations Survey (BIES) 1 – May 2024</h6>
                <small className="text-muted">03/07/2024</small>
              </div>
              <a href="#" className="stretched-link"></a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6>Paper gold grains traction, SGBs for 44k kg subscribed</h6>
                <small className="text-muted">15/07/2024</small>
              </div>
              <a href="#" className="stretched-link"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IIMAHappenings;
