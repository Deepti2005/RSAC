// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import React from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import  Cards  from './Components/Cards';
import Cards2  from './Components/Cards2';
import Header from './Components/Header';
import RecentUpdates from './Components/RecentUpdates';
import EventsList from './Components/EventList';
import About from './Components/About';


function App() {
  return (
    <>
    
   
   <Router>
      <div>
        

        <Routes>
          
          <Route path="/" element={<Navbar/>} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
   

    {/* <Navbar/> */}
    <Main/>
    <Cards/>
    {/* <Cards3/> */}/
    <div className="App">
            <header className="App-head">
                <h1>Divisions in RSAC</h1   >
            </header>
            <main>
                <EventsList />
            </main>
            <Cards2/>
            <Header/>
        </div>
    {/* <RecentUpdates /> */}
     </>
  );
}

export default App;
