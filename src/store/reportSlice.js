import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';










// Action method where we call API
export const addFundHistoryManage = createAsyncThunk('addFundHistoryManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/admin/view-users-fundHistory`, config);

  console.log(response.data);
  return response.data;
})

export const addFundHistorySlice = createSlice({
  name: 'addFundHistorySlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addFundHistoryManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(addFundHistoryManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(addFundHistoryManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});




// Action method where we call API
export const capitalWithdrawHistoryManage = createAsyncThunk('capitalWithdrawHistoryManage', async() => {
    const userData = localStorage.getItem("userInfo");
    const parsedUserData = JSON.parse(userData);
    const token = parsedUserData.access_token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    };
  
    const response = await axios.get(`${URL}/api/admin/view-users-capitalWithdrawHistory`, config);
  
    console.log(response.data);
    return response.data;
  })
  
  export const capitalWithdrawHistorySlice = createSlice({
    name: 'capitalWithdrawHistorySlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(capitalWithdrawHistoryManage.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(capitalWithdrawHistoryManage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(capitalWithdrawHistoryManage.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });


  export const walletWithdrawHistoryManage = createAsyncThunk('walletWithdrawHistoryManage', async() => {
    const userData = localStorage.getItem("userInfo");
    const parsedUserData = JSON.parse(userData);
    const token = parsedUserData.access_token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    };
  
    const response = await axios.get(`${URL}/api/admin/view-users-walletWithdrawHistory`, config);
  
    console.log(response.data);
    return response.data;
  })
  
  export const walletWithdrawHistorySlice = createSlice({
    name: 'walletWithdrawHistorySlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(walletWithdrawHistoryManage.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(walletWithdrawHistoryManage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(walletWithdrawHistoryManage.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });


export const addFundHistoryManageReducer = addFundHistorySlice.reducer;
export const capitalWithdrawHistoryManageReducer = capitalWithdrawHistorySlice.reducer;
export const walletWithdrawHistoryManageReducer = walletWithdrawHistorySlice.reducer;



