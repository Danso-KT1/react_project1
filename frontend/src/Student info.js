import React, { useState } from 'react';
import './Student info.css';

const StudentInfoEntry = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    id: '',
    gender: '',
    department: '',
    level: '',
    studentStatus: '',
    // Add additional fields as necessary
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or data submission logic here
    console.log(studentData);
    // Reset form after submission
    setStudentData({
      name: '',
      id: '',
      gender: '',
      department: '',
      level: '',
      studentStatus: '',
    });
  };

  return (
    <div className="student-info-entry">
      <h1>Student Information Entry</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={studentData.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={studentData.gender}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={studentData.department}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Level:
          <input
            type="text"
            name="level"
            value={studentData.level}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Student Status:
          <input
            type="text"
            name="studentStatus"
            value={studentData.studentStatus}
            onChange={handleInputChange}
          />
        </label>
        {/* Add additional fields as necessary */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StudentInfoEntry;

