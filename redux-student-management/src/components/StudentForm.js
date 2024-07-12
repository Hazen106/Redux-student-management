import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, updateStudent } from '../reducers/studentReducer'; 
import { useNavigate, useParams } from 'react-router-dom';

const StudentForm = () => {
  const { id } = useParams(); // Lấy id từ URL
  const students = useSelector((state) => state.students.students); // Lấy danh sách sinh viên từ store
  const student = students.find((student) => student.id === parseInt(id)); // Tìm sinh viên theo id parseInt đổi id từ kiểu chuỗi sang int để so với student.id

  // Nếu student tồn tại thuộc tính name giá trị ban đầu là student.name nếu không thì rỗng
  const [name, setName] = useState(student ? student.name : ''); 
  // Nếu student tồn tại thyoocj tính age giá trị ban đầu là student.age nếu không thì rỗng
  const [age, setAge] = useState(student ? student.age : ''); 
  // Nếu student tồn tại thuộc tính address giá trị ban đầu là student.address nếu không thì rỗng
  const [address, setAddress] = useState(student ? student.address : '');

  const dispatch = useDispatch(); // Sử dụng useDispatch để dispatch các action đến Rdux store
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Sk submit của from
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định của form (làm mới trang)
    // Ktra xem đề cập cập nhật hay thêm mới sv
    if (student) {
      // Nếu có sinh viên, cập nhật sinh viên
      dispatch(updateStudent({ id: student.id, name, age, address }));
    } else {
      // Nếu không có sinh viên, tạo sinh viên mới
      const newStudent = { name, age, address };
      dispatch(createStudent(newStudent));
    }
    navigate('/'); // Điều hướng về trang chủ sau khi submit
  };

  // Chạy callback khi component được mount và khi 'student' thay đổi
  // Nếu student tồn tại thì cập nhật state tên tuổi và địa chỉ bằng thông tin sv đó
  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setAddress(student.address);
    }
  }, [student]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <button type="submit">{student ? 'Update Student' : 'Add Student'}</button>
    </form>
  );
};

export default StudentForm;
