import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './apps/notes/NotesSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/ticket/TicketSlice';

import userLoginReducer from './authSlice';
import { packageManageReducer, acceptPackageReducer,acceptTopupReducer,topupManageReducer,rejectPackageReducer} from './packageSlice';
import { userManageReducer,userListManageReducer,AcceptUserManageReducer,RejectUserManageReducer,userTreeListManageReducer,addUserReducer,addUserReferalReducer } from './userSlice';
import {splitRoiReducer,splitRoiHistoryReducer}  from './roiSlice';
import {adminProfileManageReducer,userProfileManageReducer,editProfileManageReducer} from './profileSlice';
import {walletWithdrawPendingManageReducer,
  AcceptWalletWithdrawReducer,
  RejectWalletWithdrawReducer,
  capitalWithdrawPendingManageReducer,
  AcceptCapitalWithdrawReducer,
  RejectCapitalWithdrawReducer} from './withdrawalSlice';
import {addFundHistoryManageReducer,
  capitalWithdrawHistoryManageReducer,
  walletWithdrawHistoryManageReducer} from './reportSlice'

  import revenueCardManageReducer from './revenueCardSlice'




export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,

    userLoginReducer,
    packageManageReducer,
    userManageReducer,
    acceptPackageReducer,
    rejectPackageReducer,
    userListManageReducer,
    splitRoiReducer,
    splitRoiHistoryReducer,
    AcceptUserManageReducer,
    RejectUserManageReducer,

    userTreeListManageReducer,
    acceptTopupReducer,
    // rejectTopupReducer,
    topupManageReducer,
    adminProfileManageReducer,
    editProfileManageReducer,
    userProfileManageReducer,
    walletWithdrawPendingManageReducer,
    AcceptWalletWithdrawReducer,
    RejectWalletWithdrawReducer,
    capitalWithdrawPendingManageReducer,
    AcceptCapitalWithdrawReducer,
    RejectCapitalWithdrawReducer,
    addUserReducer,
    addUserReferalReducer,
    addFundHistoryManageReducer,
    capitalWithdrawHistoryManageReducer,
    walletWithdrawHistoryManageReducer,
    revenueCardManageReducer

    
  },
});

export default store;
