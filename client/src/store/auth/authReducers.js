import { authTypes } from '../types';

const initState = { 
    setAuth : false,
};

export const authReducers = (state = initState, action) => {
    switch (action.type) {
        case authTypes.AUTH_LOGIN:
        return {...state, setAuth : action.payload.log}
        
        default:
        return state;
    };
};