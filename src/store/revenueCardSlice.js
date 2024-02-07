import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';










// Action method where we call API
export const revenueCardManage = createAsyncThunk('revenueCardManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/admin/dashboard-data`, config);

  console.log(response.data);
  return response.data;
})

export const revenueCardManageSlice = createSlice({
  name: 'revenueCardManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(revenueCardManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(revenueCardManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(revenueCardManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});







export default revenueCardManageSlice.reducer;



