import { combineReducers } from 'redux';
import translation from '@redux/slices/translation';
const rootReducer = combineReducers({
  translation
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
