import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header'
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import MySkills from './components/mySkills';
import ScholarShip from './components/scholarship';
import EmployMe from './components/employMe';
import Projects from './components/projects';
import "./components/styleds/zfonts.css"

ReactDOM.render(
  <React.StrictMode>
    <div style={{
      display: "grid",
      
    }}>
      <Header />
      <AboutMe />
      <MySkills />
      <ScholarShip />
      <Projects />
      <EmployMe />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
