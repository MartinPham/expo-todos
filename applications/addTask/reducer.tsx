
import Task from '@/domains/task';
import uuid from 'uuid/v4';

export default (state, action) => {
	const newTasks = [...state.tasks];
	const newTask = new Task(
		uuid(),
		action.payload.name
	);
	newTasks.push(newTask);

	return {
		tasks: newTasks
	};
};