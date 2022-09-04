import { combineReducers } from 'redux';
import translation from '@redux/slices/translation';
import categories from '@redux/slices/categories';
const rootReducer = combineReducers({
  translation,
  categories
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
