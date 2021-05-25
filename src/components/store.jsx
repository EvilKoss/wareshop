import {createStore,combineReducers} from 'redux';
import Reducer from './Reducer';

const reducers = combineReducers({
	combine: Reducer
})

const store = createStore(reducers);

export default store;
