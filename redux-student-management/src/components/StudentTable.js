import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../reducers/studentReducer'; // Import hành động deleteStudent
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const StudentTable = ({ students }) => {
  const dispatch = useDispatch(); //nhận vào một prop Sử dụng useDispatch để dispatch các action

  const handleDelete = (id) => {
    dispatch(deleteStudent(id)); //nhận vào một id Dispatch hành động deleteStudent
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
            <td>
              <Link to={`/edit/${student.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
