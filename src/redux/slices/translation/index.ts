import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Iresources } from 'interfaces/categories';
import { http } from 'src/api/http';
import useNavigator from 'src/hooks/useNavigator';

interface ITranslation {
  locale: string | 'en' | 'en-US' | 'tr-TR' | 'tr',
  type: string,
  status: 'loading' | 'succeeded' | 'failed' | 'idle'
  resources: Iresources[]
}

const initialState: ITranslation = {
  locale: 'en',
  type: 'idle',
  status: 'idle',
  resources: []
};

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    changeLocaleLanguge(state, action) {
      state.locale = action.payload
      state.type = 'changeLanguage'
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resources = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { changeLocaleLanguge } = translationSlice.actions
export const fetchCategories: any = createAsyncThunk('/api/resources', async (queryParam: any) => {
  const res = await http.get('/api/resources');
  return res.data.data;
});
export default translationSlice.reducer;
