import { createSlice } from '@reduxjs/toolkit';
import useNavigator from 'src/hooks/useNavigator';

interface ITranslation {
  locale: string | 'en' | 'en-US' | 'tr-TR' | 'tr',
  type: string
}

const initialState: ITranslation = {
  locale: 'en',
  type: 'idle'
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
});

export const { changeLocaleLanguge } = translationSlice.actions
export default translationSlice.reducer;
