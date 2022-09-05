import { createAsyncThunk, createSlice, Dispatch } from '@reduxjs/toolkit';
import { IBlog } from 'interfaces/blogs';
import { http } from 'src/api/http';

interface Iblogs {
    blogs: IBlog[]
    status: 'loading' | 'succeeded' | 'failed' | 'idle';
    content: string
}

const initialState: Iblogs = {
    blogs: [],
    status: 'idle',
    content: ""
};

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {

        changeContent(state, action) {
            state.content = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
            });
    },

});

export const { changeContent } = blogsSlice.actions;
export default blogsSlice.reducer;

export const fetchBlogs: any = createAsyncThunk('/api/blog', async (queryParam: any) => {
    const res = await http.get('/api/blog');
    return res.data.data;
});



