import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '@/applications/reducers';
import sagas from '@/applications/sagas';
import initialState from '@/config/initialState';

export default () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		reducers, 
		initialState, 
		applyMiddleware(sagaMiddleware)
	);
	
	sagaMiddleware.run(sagas);

	return store;
}
