import React, { useReducer, useContext } from 'react';
import { DISPLAY_ALERT } from './actions';
import reducer from './reducer';

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// reducer is the function that will handle our state changes
	// state = our current state
	// dispatch = the action we want to take over our state
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
	};

	return (
		<AppContext.Provider value={{ ...state, displayAlert }}>
			{/* Children is the application we are rendering*/}
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
