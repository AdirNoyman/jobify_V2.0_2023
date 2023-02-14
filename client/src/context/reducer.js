import { DISPLAY_ALERT } from './actions';

const reducer = (state, action) => {
	// Show alert
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: 'danger',
			alertText: 'Please provide all values! 🤨',
		};
	}

	// If the dispatchers sends an invalid action - throw an error
	throw new Error(`no such action 🤨: ${action.type}`);
};

export default reducer;
