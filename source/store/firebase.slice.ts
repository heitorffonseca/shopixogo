import { createSlice } from '@reduxjs/toolkit';
import {DocumentData} from "@firebase/firestore";

type InitialStateParams = {
    categories: DocumentData[] | null
}

const initialState: InitialStateParams = {
    categories: null
};

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
});

export const { setCategories } = firebaseSlice.actions;

export default firebaseSlice.reducer;