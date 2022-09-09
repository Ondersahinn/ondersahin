import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Icategories } from 'interfaces/categories';
import { http } from 'src/api/http';

interface ICategories {
    categories: Icategories[]
    status: 'loading' | 'succeeded' | 'failed' | 'idle';
}

const initialState: ICategories = {
    categories: [],
    status: 'idle'
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        changeCategoriesStatus(state, action) {
            state.status = action.payload

        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const { changeCategoriesStatus } = categoriesSlice.actions;
export const fetchCategories: any = createAsyncThunk('/api/categories', async (queryParam: any) => {
    const res = await http.get('/api/categories');
    return res.data.data;
});

export default categoriesSlice.reducer;


