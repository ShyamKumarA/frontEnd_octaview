import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import URL from "../Constant";

// Redux action to get user
export const splitRoi = createAsyncThunk('splitRoi', async(percentage) => {
  console.log(percentage);
    const userData = localStorage.getItem("userInfo");
    const parsedUserData = JSON.parse(userData);
    const token = parsedUserData.access_token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    };
    
    const response = await axios.post(`${URL}/api/admin/commission-split`,{percentage}, config);
  
    return response.data;
  
  })
  
  export const splitRoiSlice = createSlice({
    name: 'splitRoiSlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(splitRoi.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(splitRoi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(splitRoi.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });

  export const splitRoiHistory = createAsyncThunk('splitRoiHistory', async() => {
      const userData = localStorage.getItem("userInfo");
      const parsedUserData = JSON.parse(userData);
      const token = parsedUserData.access_token;
    
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      };
      
      const response = await axios.get(`${URL}/api/user/ROI-History`, config);
      return response.data;
    
    })
    
    export const splitRoiHistorySlice = createSlice({
      name: 'splitRoiHistorySlice',
      initialState:{
        loading: false,
        data: null,
        error: false,
      },
      reducers: {},
      extraReducers: (builder) => {
        builder.addCase(splitRoiHistory.pending, (state) => {
          state.loading = true;
          state.data = null;
          state.error = false;
        });
        builder.addCase(splitRoiHistory.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.error = false;
        });
        builder.addCase(splitRoiHistory.rejected, (state, action) => {
          console.log("Error", action.payload);
          state.error = true;
        });
      },
    });
  
  export const  splitRoiReducer=splitRoiSlice.reducer;
  export const splitRoiHistoryReducer = splitRoiHistorySlice.reducer;

