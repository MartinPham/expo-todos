import {type as addTaskType} from './addTask';
import addTaskReducer from './addTask/reducer';

export default (state, action) => {
	if(action.type === addTaskType)
	{
		return addTaskReducer(state, action);
	}
	return state;
};