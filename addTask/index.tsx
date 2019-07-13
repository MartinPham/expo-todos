export const type = 'ADD_TASK';

export default (name) => {
	return {
		type,
		payload: {
			name
		}
	}
};