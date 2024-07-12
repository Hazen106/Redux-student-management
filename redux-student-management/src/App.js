import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router và các component liên quan từ react-router-dom
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Student Management</h1>
        <Routes>
          {/* Định nghĩa các route cho ứng dụng */}
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
