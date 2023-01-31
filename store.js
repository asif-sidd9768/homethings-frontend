import { createStore, combineReducers} from 'redux';
import userReducer from './src/reducers/userReducer';

console.log('HELOO STORE')
const rootReducer = combineReducers({
  users: userReducer,
});

export const store = createStore(rootReducer);