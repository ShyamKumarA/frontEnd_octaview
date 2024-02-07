import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';

// view pending withdraw request, Action method where we call API,
export const walletWithdrawPendingManage = createAsyncThunk('walletWithdrawPendingManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/admin/view-wallet-withdraw-pending`, config);

  return response.data;
})

export const walletWithdrawPendingManageSlice = createSlice({
  name: 'walletWithdrawPendingManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(walletWithdrawPendingManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(walletWithdrawPendingManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(walletWithdrawPendingManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

//Accept wallet withdraw slice
export const AcceptWalletWithdraw = createAsyncThunk('AcceptWalletWithdraw', async(id) => {
  
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };
  
  const response = await axios.post(`${URL}/api/admin/user-walletWithdraw-approval/${id}`, {},config);

  console.log(response);
  return response.data;

})

export const acceptWalletWithdrawSlice = createSlice({
  name: 'acceptWalletWithdrawSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AcceptWalletWithdraw.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(AcceptWalletWithdraw.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(AcceptWalletWithdraw.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});


//reject package slice

export const RejectWalletWithdraw = createAsyncThunk('RejectWalletWithdraw', async(id) => {
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
  const response = await axios.post(`${URL}api/admin/user-walletWithdraw-reject/${id}`, {},config);

  console.log(response);
  return response.data;

})

export const rejectWalletWithdrawSlice = createSlice({
  name: 'rejectWalletWithdrawSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RejectWalletWithdraw.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(RejectWalletWithdraw.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(RejectWalletWithdraw.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

// view pending withdraw request, Action method where we call API,
export const capitalWithdrawPendingManage = createAsyncThunk('capitalWithdrawPendingManage', async() => {
    const userData = localStorage.getItem("userInfo");
    const parsedUserData = JSON.parse(userData);
    const token = parsedUserData.access_token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    };
  
    const response = await axios.get(`${URL}/api/admin/view-withdraw-pending`, config);
  
    return response.data;
  })
  
  export const capitalWithdrawPendingManageSlice = createSlice({
    name: 'capitalWithdrawPendingManageSlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(capitalWithdrawPendingManage.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(capitalWithdrawPendingManage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(capitalWithdrawPendingManage.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });
  
  //Accept wallet withdraw slice
  export const AcceptCapitalWithdraw = createAsyncThunk('AcceptCapitalWithdraw', async(id) => {
    
    const userData = localStorage.getItem("userInfo");
    const parsedUserData = JSON.parse(userData);
    const token = parsedUserData.access_token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    };
    
    const response = await axios.post(`${URL}/api/admin/user-capitalWithdraw-approval/${id}`, {},config);
  
    console.log(response);
    return response.data;
  
  })
  
  export const acceptCapitalWithdrawSlice = createSlice({
    name: 'acceptCapitalWithdrawSlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(AcceptCapitalWithdraw.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(AcceptCapitalWithdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(AcceptCapitalWithdraw.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });
  
  
  //reject package slice
  
  export const RejectCapitalWithdraw = createAsyncThunk('RejectCapitalWithdraw', async(id) => {
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
    const response = await axios.post(`${URL}/api/admin/user-capitalWithdraw-reject/${id}`, {},config);
  
    console.log(response);
    return response.data;
  
  })
  
  export const rejectCapitalWithdrawSlice = createSlice({
    name: 'rejectCapitalWithdrawSlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(RejectCapitalWithdraw.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(RejectCapitalWithdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(RejectCapitalWithdraw.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });

  export const walletWithdrawPendingManageReducer = walletWithdrawPendingManageSlice.reducer;
export const AcceptWalletWithdrawReducer = acceptWalletWithdrawSlice.reducer;
export const RejectWalletWithdrawReducer = rejectWalletWithdrawSlice.reducer;

export const capitalWithdrawPendingManageReducer = capitalWithdrawPendingManageSlice.reducer;
export const AcceptCapitalWithdrawReducer = acceptCapitalWithdrawSlice.reducer;
export const RejectCapitalWithdrawReducer = rejectCapitalWithdrawSlice.reducer;


