import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';







//Add user by Admin

export const addUserReferal = createAsyncThunk("addUserReferal", async (values) => {
  console.log(values);

  try {
    const response = await axios.post(
      `${URL}/api/user/add-referal-user`,
      values,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error", error.response.data);
    throw error;
  }
});

// ...

export const addUserReferalSlice = createSlice({
  name: 'addUserReferalSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUserReferal.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(addUserReferal.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(addUserReferal.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});




//Add user by Admin

export const addUser = createAsyncThunk("addUser", async (values) => {
  console.log(values);
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${URL}/api/user/add-user`,
      values,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error", error.response.data);
    throw error;
  }
});

// ...

export const addUserSlice = createSlice({
  name: 'addUserSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

// Action method where we call API
export const userManage = createAsyncThunk('userManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/admin/view-ready-to-approved-users`, config);

  console.log(response.data);
  return response.data;
})

export const userManageSlice = createSlice({
  name: 'userManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(userManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(userManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const userListManage = createAsyncThunk('userListManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/user/view-childs`, config);

  console.log(response.data);
  return response.data;
})

export const userListManageSlice = createSlice({
  name: 'userListManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userListManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(userListManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(userListManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const AcceptUserManage = createAsyncThunk('AcceptUserManage', async(id) => {
  
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };
  
  const response = await axios.post(`${URL}/api/admin/accept-users/${id}`, {},config);

  console.log(response);
  return response.data;

})


export const acceptUserSlice = createSlice({
  name: 'acceptUserSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AcceptUserManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(AcceptUserManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(AcceptUserManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});


export const RejectUserManage = createAsyncThunk('RejectUserManage', async(id) => {
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
  
  const response = await axios.post(`${URL}/api/admin/reject-users/${id}`, {},config);

  console.log(response);
  return response.data;

})


export const rejectUserSlice = createSlice({
  name: 'rejectUserSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RejectUserManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(RejectUserManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(RejectUserManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});



export const userTreeListManage = createAsyncThunk('userTreeListManage', async(id) => {
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

  const response = await axios.get(`${URL}/api/user/view-childs?id=${id}`, config);

  console.log(response.data);
  return response.data;
})

export const userTreeListManageSlice = createSlice({
  name: 'userTreeListManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userTreeListManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(userTreeListManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(userTreeListManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const addUserReducer = addUserSlice.reducer;
export const addUserReferalReducer = addUserReferalSlice.reducer;
export const userListManageReducer = userListManageSlice.reducer;
export const userManageReducer = userManageSlice.reducer;
export const AcceptUserManageReducer = acceptUserSlice.reducer;
export const RejectUserManageReducer = rejectUserSlice.reducer;

export const userTreeListManageReducer = userTreeListManageSlice.reducer;

