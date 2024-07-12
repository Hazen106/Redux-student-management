// Định nghĩa các hành động cho sinh viên
export const getStudents = () => ({
    type: 'GET_STUDENTS',
  });
  
  export const createStudent = (student) => ({
    type: 'CREATE_STUDENT',
    payload: student,
  });
  
  export const updateStudent = (student) => ({
    type: 'UPDATE_STUDENT',
    payload: student,
  });
  
  export const deleteStudent = (id) => ({
    type: 'DELETE_STUDENT',
    payload: id,
  });
  