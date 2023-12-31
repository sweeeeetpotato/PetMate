import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  type:'',
  id:'',
  resMeg : '로딩중',
  status : 'idle',
}

export const AxiosDeletePost = createAsyncThunk(
  'deletePost/axiosDeletePost',
  async(URL) =>{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const config = {
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-type' : 'application/json'
      },
    }
    const res = await axios.delete(URL,config);
    return res.data;
  }
)

export const deletePost = createSlice({
  name : 'deletePost',
  initialState,
  reducers:{
    selectId (state,action) {
      state.id = action.payload; 
    },
    checkType (state,action) {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosDeletePost.pending, (state) => {
        state.status = 'loading';
        state.resMeg  = '로드중';
      })
      .addCase(AxiosDeletePost.fulfilled, (state, action) => {
        state.status = 'success';
        state.resMeg  = action.payload;
      })
      .addCase(AxiosDeletePost.rejected,(state) => {
        state.state = 'fail';
      });
  },
})

export const selectDeleteMsg = (state) =>state.deletePost.resMeg;
export const getDeleteStatus = (state) => state.deletePost.status;
export const SelectId = (state) => state.deletePost.id;
export const DeleteType = (state) => state.deletePost.type;
export const deleteActions = deletePost.actions;
export default  deletePost.reducer;
