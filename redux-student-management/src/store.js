import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './reducers/studentReducer';

//Khởi tạo store để lưu trữ state
const store = configureStore({
    reducer: {
        students: studentReducer, //Kết nối reducer với store
    },
});

export default store; //Xuất store