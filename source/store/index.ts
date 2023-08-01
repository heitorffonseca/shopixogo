import { configureStore } from '@reduxjs/toolkit';
import firebaseSlice from "@/source/store/firebase.slice";

const store = configureStore({
    reducer: { firebase: firebaseSlice }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;