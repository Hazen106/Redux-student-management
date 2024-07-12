import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo trạng thái ban đầu với một sinh viên mẫu
const initialState = {
  students: [
    { id: 1, name: 'Đỗ Văn Quý', age: 23, address: 'Hải Dương' } // Sinh viên mẫu ban đầu
  ],
  nextId:2,
};

// Tạo một slice cho students
const studentSlice = createSlice({
  name: 'students', // Tên của slice
  initialState, // Trạng thái ban đầu
  reducers: {
    getStudents: (state) => state, // Action để lấy danh sách sinh viên
    createStudent: (state, action) => {
      // Action để thêm một sinh viên mới vào state
      // Action.payload sử dụng cú pháp spread để sao chép thuộc tính của payload vào sinh viên mới
      state.students.push({ id: state.nextId,...action.payload }); 
      state.nextId +=1;
    },
    updateStudent: (state, action) => {
      // Action để cập nhật thông tin sinh viên trong state
      // Tìm sinh viên có trùng id với action.payload.id nếu thấy thì cập nhật sv đố với dữ liệu từ payload
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      // Action để xóa sinh viên khỏi state
      // Filter danh sách sinh viên và giữ lại các sinh viên có id không trùng với action.payload hay loại bỏ sinh viên có id chỉ định trong payload
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
});

// Xuất các action để sử dụng trong component
export const { getStudents, createStudent, updateStudent, deleteStudent } = studentSlice.actions;
// Xuất reducer để cấu hình store
export default studentSlice.reducer;
