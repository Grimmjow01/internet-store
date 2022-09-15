import { authTypes } from '../types';
import $api from '../../http';

export const isAuth = (log) => ({type: authTypes.AUTH_LOGIN, payload: { log } });

export const getLoginThunk = (inputLogin) => async (dispatch) => {
    try {
        const response = await $api.post('/login', inputLogin);
        localStorage.setItem('token', response.data.accessToken);
        console.log('localStorage==', localStorage);
        dispatch(isAuth(true));
    } catch (error) {
        
    }
};