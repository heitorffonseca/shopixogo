import {createSlice} from '@reduxjs/toolkit';
import {ProductInterface} from "@/source/interfaces/ProductInterface";
import {CategoryInterface} from "@/source/interfaces/CategoryInterface";

type InitialStateParams = {
    categories: CategoryInterface[] | null,
    products: ProductInterface[] | null
}

const initialState: InitialStateParams = {
    categories: null,
    products: null
};

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        },
        setProducts(state, action) {
            state.products = action.payload
        }
    }
});

export const { setCategories, setProducts } = firebaseSlice.actions;

export default firebaseSlice.reducer;