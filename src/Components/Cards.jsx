// src/components/ResearchEdge.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'; // For custom styling if needed

const ResearchEdge = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4"><u>Higlights of RSAC</u></h1>
      </div>
      <p className="lead"><h3>Advancing knowledge that impacts practice, policy and academia.</h3></p>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-dark text-white mb-4">
            <img src="https://content3.jdmagicbox.com/comp/lucknow/w3/0522px522.x522.140221070035.x4w3/catalogue/remote-sensing-applications-centre-jankipuram-lucknow-government-organisations-p9sfLgVasc.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">Going the Extra Mile: What Taxi Rides Tell Us About the Long-Hour Culture in Finance</h5>
              <p className="card-text">Management Science</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white mb-4">
            <img src="https://content3.jdmagicbox.com/comp/lucknow/w3/0522px522.x522.140221070035.x4w3/catalogue/remote-sensing-applications-centre-jankipuram-lucknow-government-organisations-p9sfLgVasc.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">Cooperative Security Against Interdependent Risks</h5>
              <p className="card-text">Production and Operations Management</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white mb-4">
            <img src="https://content3.jdmagicbox.com/comp/lucknow/w3/0522px522.x522.140221070035.x4w3/catalogue/remote-sensing-applications-centre-jankipuram-lucknow-government-organisations-p9sfLgVasc.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">Infrastructure and Finance: Evidence from India's GQ Highway Network</h5>
              <p className="card-text">Journal of Urban Economics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchEdge;
