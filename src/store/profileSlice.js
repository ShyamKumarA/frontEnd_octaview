import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';

// view pending packages, Action method where we call API,
export const adminProfileManage = createAsyncThunk('adminProfileManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/user/view-user-profile`, config);

  return response.data;
})

export const adminProfileManageSlice = createSlice({
  name: 'adminProfileManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminProfileManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(adminProfileManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(adminProfileManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

//edit profile

export const editProfileManage = createAsyncThunk('editProfileManage', async(userId) => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };
  const {id,formData}=userId;
  console.log(id);
  console.log(formData);

const {username,email,address,password,txnPassword,phone}=formData;

  const response = await axios.post(`${URL}/api/admin/edit-profile-admin/${id}`,{username,email,address,password,txnPassword,phone}, config);

  return response.data;
})

export const editProfileManageSlice = createSlice({
  name: 'editProfileManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editProfileManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(editProfileManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(editProfileManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});
export const  userProfileManage = createAsyncThunk('userProfileManage', async(id) => {
  console.log(id);
const userData = localStorage.getItem("userInfo");
const parsedUserData = JSON.parse(userData);
const token = parsedUserData.access_token;

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
  },
};

const response = await axios.get(`${URL}/api/admin/view-users-details/${id}`, config);
console.log(response);
  return response.data;
})


export const userProfileManageSlice = createSlice({
name: 'userProfileManageSlice',
initialState:{
  loading: false,
  data: null,
  error: false,
},
reducers: {},
extraReducers: (builder) => {
  builder.addCase(userProfileManage.pending, (state) => {
    state.loading = true;
    state.data = null;
    state.error = false;
  });
  builder.addCase(userProfileManage.fulfilled, (state, action) => {
    state.loading = false;
    state.data = action.payload;
    state.error = false;
  });
  builder.addCase(userProfileManage.rejected, (state, action) => {
    console.log("Error", action.payload);
    state.error = true;
  });
},
});



export const  adminProfileManageReducer=adminProfileManageSlice.reducer;
export const  editProfileManageReducer=editProfileManageSlice.reducer;
  export const userProfileManageReducer = userProfileManageSlice.reducer;



