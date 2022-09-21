import { createAsyncThunk, createSlice, Dispatch } from '@reduxjs/toolkit';
import { IBlog } from 'interfaces/blogs';
import { http } from 'src/api/http';

interface Iblogs {
    blogs: IBlog[]
    status: 'loading' | 'succeeded' | 'failed' | 'idle';
    content: string
}
type State = any


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

// İexport function saveNewTodo() {
//     return async function saveNewTodoThunk(dispatch: Dispatch, getState: () => State) {
//         const { content } = getState()
//         console.log(content)
//         //   const response = await client.post('/fakeApi/todos', { todo: initialTodo })
//         //   dispatch({ type: 'todos/todoAdded', payload: response.todo })
//     }
// }
export const saveNewTodo: any = createAsyncThunk('rtest' , async (queryParam: any , {getState}) => {
    console.log(getState())

  });
export default blogsSlice.reducer;


