import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents, deleteStudent } from "../actions/studentActions";
import StudentTable from './StudentTable';
import {Link} from 'react-router-dom';

const StudentList = () => {
    const dispatch = useDispatch(); //sd useDispatch để dispatch các action
    const students = useSelector((state) => state.students.students); //sd useSelector để lấy state trong store

    useEffect(() => {
        dispatch(getStudents());//Lấy danh sách sinh viên khi component được mount( hiển thị lần đầu)
    }, [dispatch]); //Chạy callback khi mảng thay đổi

    return (
        <div>
            <h2>Student List</h2>
            <Link to="/add">
                <button>Add</button> {/* Nút để thêm sinh viên */}
            </Link>
            <StudentTable students={students} /> {/* Hiển thị danh sách sinh viên dưới dạng bảng */}
        </div>
      );
};

export default StudentList;