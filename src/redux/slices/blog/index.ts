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

});

export const { changeContent } = blogsSlice.actions;

export const saveNewTodo: any = createAsyncThunk('rtest', async (queryParam: any, { getState }: any) => {
    const newObj = {
        title: 'İlk Post',
        shortDesc: 'The VKS flew air strikes using PGMs against unknown targets in Studenok, Slovyansk, Siversk, Kostyantynivka, Pokrivsk, Vasyilivka, Zaporizhzhya (5–6 places were hit), and — especially ',
        description: getState().blogs.content
    }
    http.post('/api/blog/add', newObj).then((res) => res).catch((err) => err)
});
export default blogsSlice.reducer;


