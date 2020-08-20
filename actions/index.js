import { GET_USER,GET_USER_SUCCESS,GET_USER_FAIL } from './types';

export function getUser(user){
	return {
		type: GET_USER,
		payload: {
			request:{
				url: `/users/${user}`
			}
		}
	};
}