import { combineReducers } from 'redux';
import translation from '@redux/slices/translation';
import categories from '@redux/slices/categories';
import blogs from '@redux/slices/blog';

const rootReducer = combineReducers({
  translation,
  categories,
  blogs
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
