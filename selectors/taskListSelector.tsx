import {createSelector} from 'reselect'

export default createSelector(
	(state: any) => state.tasks,
	tasks => tasks
);