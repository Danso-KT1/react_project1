import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
const Dashboard = () => {
  // Sample data for student details and courses
  const studentName = "Hannah Lartebea";
  const studentId = "10946575";
  const enrolledCourses = ["Mathematics", "Science", "English"];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {studentName}!</h1>
      </header>
      <nav className="dashboard-sidebar">
        <ul>
          <li>
            <Link to="/student info">Student Info</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="/Assignments">Assignments</Link>
          </li>
          <li>
            <Link to="/Calender">Calender</Link>
          </li>
          <li>
            <Link to="/Messsages">Messages</Link>
          </li>
          <li>
            <Link to="/Settings">Settings</Link>
          </li>
          </ul>
      </nav>
      <div className="dashboard-content">
        <h2>Student Details</h2>
        <p><strong>Name:</strong> {studentName}</p>
        <p><strong>Student ID:</strong> {studentId}</p>
        <h2>Enrolled Courses</h2>
        <ul>
          {enrolledCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} Your University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
