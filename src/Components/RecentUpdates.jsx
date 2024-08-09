// src/components/MainContent.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'; // For custom styling
import sample from '../media/sample.png'; // Import your sample image
import background from '../media/random.png'; // Import your background image

const RemoteSensingApplicationCenter = ({ backgroundImage }) => {
  const [bgImage, setBgImage] = useState(backgroundImage);

  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover', // This ensures the background image covers the entire container
    backgroundPosition: 'center', // This centers the background image
    minHeight: '100vh' // Ensures the container takes the full height of the viewport
  };

  return (
    <div className="container-fluid text-white p-4" style={containerStyle}>
      <div className="row">
        <div className="col-lg-8">
          <h1>
            <u>Remote Sensing Application Center, Uttar Pradesh</u>
          </h1>
          <h3>
            <p>
              An Autonomous Organisation under the Department of Sensing & Technology, Government of Uttar Pradesh
            </p>
          </h3>
          <button className="btn btn-danger">News Conference Details</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4">
          <div className="card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">UPCOMING MISSION</h5>
              <p className="card-text">NASA's SpaceX Crew-9</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">MISSION UPDATES</h5>
              <p className="card-text">NASA's Boeing Crew Flight Test</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">BENEFITS FOR HUMANITY</h5>
              <p className="card-text">Your Orbiting Laboratory</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Updates Section */}
      <section className="recent-updates my-5">
        <div className="container">
          <h2 className="mb-4">Recent Updates</h2>
          <div className="row">
            <div className="col-md-3 mb-3">
              <img src={sample} alt="Update 1" className="img-fluid rounded animated-image" />
            </div>
            <div className="col-md-3 mb-3">
              <img src={sample} alt="Update 2" className="img-fluid rounded animated-image" />
            </div>
            <div className="col-md-3 mb-3">
              <img src={sample} alt="Update 3" className="img-fluid rounded animated-image" />
            </div>
            <div className="col-md-3 mb-3">
              <img src={sample} alt="Update 4" className="img-fluid rounded animated-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MainContent = () => {
  const backgroundImageUrl = background; // Replace with your actual image URL

  return <RemoteSensingApplicationCenter backgroundImage={backgroundImageUrl} />;
};

export default MainContent;
