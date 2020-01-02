
import {createStore} from 'redux';
import reducers from './reducers/index';
const initValue={};
const store = createStore(reducers,initValue);
export default store;