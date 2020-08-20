import { GET_USER,GET_USER_SUCCESS,GET_USER_FAIL } from '../actions/types';

const initialState = { user : {} };

export default function reducer(state = initialState, action){
	switch (action.type) {
		case GET_USER:
			return { ...state, loadingProfile: true };
		case GET_USER_SUCCESS:
			return {  ...state, loadingProfile: false, user: action.payload.data };
		case GET_USER_FAIL:
			return { ...state, 
					 loadingProfile: false,
					 errorUser: 'Error getting user info' 
			};
		default: 
			return state;				
	}
}