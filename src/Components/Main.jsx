// src/components/MainContent.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'; // For custom styling if needed
// import cardH from './cardH';

const RemoteSensingApplicationCenter = ({ backgroundVideoUrl }) => {
  const [backgroundVideo, setBackgroundVideo] = useState(backgroundVideoUrl);

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh', // Ensures the container takes the full height of the viewport
    overflow: 'hidden',
    color: 'white'
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the video covers the entire container
    zIndex: -1 // Ensures the video is behind the content
  };

  return (
    <div className="container-fluid text-white p-4" style={containerStyle}>
      <video style={videoStyle} src={backgroundVideo} autoPlay loop muted></video>
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
      <div>
        <cardH title='Hello world' desc='some random data can be added here tells a short description'/>
      </div>
      <div className="row mt-4 top-card">
        <div className="col-lg-4">
          <div className="card main-card bg-transparent text-white"> {/* Apply main-card class here */}
            <div className="card-body">
              <h5 className="card-title">UPCOMING MISSION</h5>
              <p className="card-text">NASA's SpaceX Crew-9</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card main-card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">MISSION UPDATES</h5>
              <p className="card-text">NASA's Boeing Crew Flight Test</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card main-card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">BENEFITS FOR HUMANITY</h5>
              <p className="card-text">Your Orbiting Laboratory</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  const backgroundVideoUrl = 'https://media.istockphoto.com/id/2160507892/video/realistic-earth-night-from-space-zoom-in-clouds-india.mp4?s=mp4-640x640-is&k=20&c=BskccPrEuAJ01AZuQHAenWwHybE7L_2QC2q1sXkjB8M=';
  return <RemoteSensingApplicationCenter backgroundVideoUrl={backgroundVideoUrl} />;
};

export default MainContent;
