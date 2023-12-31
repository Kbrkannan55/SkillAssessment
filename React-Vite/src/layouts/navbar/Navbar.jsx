import React, { useState } from "react";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo-s.png";
import L_Logo from "../../assets/Logo-l.png";
import Kanini from "../../assets/kanini-c.png";
import Dashboard_V from "../../assets/DashboardVector.png";
import Questions_V from "../../assets/QuestionsVector.png";
import Jobseeker_V from "../../assets/JobseekerVector.png";
import Employee_V from "../../assets/EmployeeVector.png";
import Settings_V from "../../assets/SettingsVector.png";
import Logout_V from "../../assets/LogoutVector.png";
import Bell_V from "../../assets/Bell.png";

const Navbar = (props) => {
  // State variables
  const [click, setClick] = useState(true); // Toggle for Questions section
  const [empClick, setEmpClick] = useState(true); // Toggle for Employee section
  const [menu, setMenu] = useState(false); // Toggle for sidebar menu
  const [activePara, setActivePara] = useState(null); // Track the active paragraph
  const [getEmployee, setEmployee] = useState([]);
  // Toggle Questions section and set active paragraph
  const questionToggle = () => {
    setEmpClick(true); // Hide Employee section
    setClick(!click); // Toggle Questions section
    setActivePara(click ? "assessmentData" : null); // Set active paragraph to 'assessmentData' if click is true, otherwise reset to null
  };
  // Toggle Employee section and set active paragraph
  const toggle = () => {
    setEmpClick(!empClick);
    setClick(true);
    setActivePara(click ? "addQuestions" : null);
  };
  // Toggle sidebar menu
  const sideBar = () => {
    setMenu(!menu);
  };
  return (
    <div>
      {/* Main container */}
      <div className="container">
        {/* Sidebar with dynamic class assignment based on 'menu' state */}
        <div className={menu ? "sidebar" : "sidebar hidden-2"} id="nav-links">
          {/* Logo section */}
          <div className="logo-2">
            <img
              src={Logo}
              alt="Logo"
              className="logo-img"
              width="47px"
              height="47px"
            />
            <h3 id="kaniniletter">
              Kanini
              <br />
              <span id="letter">Assessment</span>
            </h3>
            {/* Menu icon with click event to trigger sidebar function */}
            <div className="menu" onClick={sideBar}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          {/* Dashboard link with click event to handle dashboard selection */}
          <p
            onClick={() => handleParaClick("dashboard")}
            className={activePara === "dashboard" ? "active" : ""}
            to="/Dashboard"
            id="sidebar-item"
          >
            <img src={Dashboard_V} />
            &emsp;Dashboard
          </p>
          {/* Questions link with toggle function */}
          <p onClick={toggle} to="/AddQuestion">
            <img src={Questions_V} />
            &emsp;Questions &emsp;&emsp;&emsp;
            <FontAwesomeIcon icon={empClick ? faChevronDown : faChevronUp} />
          </p>
          {/* Questions dropdown */}
          <div className={empClick ? "ques hidden" : "ques"} id="ques">
            {/* Add Questions link */}
            <p
              onClick={() => handleParaClick("addQuestions")}
              className={activePara === "addQuestions" ? "active" : ""}
              id="sidebar-item"
              to="/AddQuestion"
            >
              Add Questions
            </p>
            {/* Question bank link */}
            <p
              onClick={() => handleParaClick("questionbank")}
              className={activePara === "questionbank" ? "active" : ""}
              id="sidebar-item"
              to="/QuestionBank"
            >
              Question bank
            </p>
          </div>
          {/* Jobseeker link */}
          <p
            onClick={() => handleParaClick("jobseeker")}
            className={activePara === "jobseeker" ? "active" : ""}
            id="sidebar-item"
            to="/JobseekerAssessments"
          >
            <img src={Jobseeker_V} />
            &emsp;Jobseeker
          </p>
          {/* Employee link with toggle function */}
          <p
            onClick={questionToggle}
            to="/EmployeeAssessments"
            id="sidebar-item"
          >
            <img src={Employee_V} />
            &emsp;Employee &emsp;&emsp;&emsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={click ? faChevronDown : faChevronUp} />
          </p>
          {/* Employee dropdown */}
          <div className={click ? "emp hidden" : "emp"} id="emp">
            {/* Assessment Data link */}
            <p
              onClick={() => handleParaClick("assessmentData")}
              className={activePara === "assessmentData" ? "active" : ""}
              id="sidebar-item"
              to="/EmployeeAssessments"
            >
              Assessment Data
            </p>
            {/* Manage Employee link */}
            <p
              onClick={() => handleParaClick("manageemployee")}
              className={activePara === "manageemployee" ? "active" : ""}
              id="sidebar-item"
              to="/ManageEmployee"
            >
              Manage Employee
            </p>
            {/* Employee Request */}
            <p
              onClick={() => handleParaClick("employeeRequest")}
              className={activePara === "employeeRequest" ? "active" : ""}
              id="sidebar-item"
              to="/EmployeeRequest"
            >
              Employee Request
            </p>
          </div>
          {/* Settings link */}
          <p
            onClick={() => handleParaClick("settings")}
            className={activePara === "settings" ? "active" : ""}
            id="sidebar-item"
            to="/Settings"
          >
            <img src={Settings_V} />
            &emsp;Settings
          </p>
          {/* Logo and logout section */}
          <div className="l-logo">
            <img
              src={L_Logo}
              className="logo-L"
              alt="Kanini Logo"
              width="190px"
              height="240px"
            />
            {/* Logout link */}
            <p
              onClick={() => handleParaClick("logout")}
              className={activePara === "logout" ? "active" : ""}
              id="sidebar-item"
            >
              <img src={Logout_V} />
              &emsp;Logout
            </p>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div>
        <div className="navbar">
          {/* Menu Icon */}
          <div className="menu" onClick={sideBar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* Heading */}
          <div className="heading">
            <h3 id="title">
              {props.title}
              <br />
              <br />
              <span id="desc">{props.desc}</span>
            </h3>
          </div>
          {/* Admin Section */}
          <div className="inline">
            <div className="hide-icon" id="hr">
              {/* Bell icon */}
              {getEmployee.length > 0 ? (
                <span className="bell-icon-cursor" onClick={RouteToRequest}>
                  <img src={Bell_V} id="bell" height="28px" width="28px" />
                  <span>
                    <div className="dot-request">&nbsp;</div>
                  </span>
                </span>
              ) : (
                <img src={Bell_V} id="bell" height="28px" width="28px" />
              )}
              {/* Kanini Logo */}
              <span>
                <img
                  className="kanini-c"
                  src={Kanini}
                  alt="kanini"
                  height="38px"
                  width="38px"
                />
              </span>
              <span id="admintext">HR Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
