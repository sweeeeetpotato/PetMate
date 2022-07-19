import { configureStore } from "@reduxjs/toolkit";
import Reducer from './reducers/Reducer'
import getPetInfoReducer from './reducers/getPetInfoSlice'
import getPostReducer from "./reducers/getPostSlice";

//추후고려
// const userToken = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userinfo")).user.token
//   : null;

// const initialState = {
//   userLogin: { userToken: userToken },
// };

export const store = configureStore({
  reducer:{
    // initialState,
    getPetInfo:getPetInfoReducer,
    getPost:getPostReducer
  },
})
