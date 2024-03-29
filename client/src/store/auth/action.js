/* eslint-disable no-unused-vars */
import { authTypes } from '../types';
import $api from '../../http';
import axios from 'axios';

export const isAuth = (log) => ({type: authTypes.AUTH_LOG, payload: { log } });
export const collectorData = (data) => ({type: authTypes.AUTH_USERDATA, payload: { data } });
export const collectorErrorMessage = (message) => ({type: authTypes.AUTH_ERRORMESSAGE, payload: { message } });
export const dataAdmin = (data) => ({type: authTypes.AUTH_ADMIN, payload: { data } });
export const getUsersLogin = (login) => ({type: authTypes.GET_ALL_LOGIN, payload: {login} });

export const loginThunk = (inputLogin, callback) => async (dispatch) => {
    try {
        const response = await $api.post('/login', inputLogin);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(collectorData(response.data.user));
        dispatch(isAuth(true));
        if (response.data.user.role === 'admin') {
            dispatch(dataAdmin(true));
        };
        callback();
    } catch (e) {
        dispatch(collectorErrorMessage(e.response?.data?.message));
    }
};

export const registerThunk = (inputLogin, callback) => async (dispatch) => {
    try {
        const response = await $api.post('/registration', inputLogin);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(collectorData(response.data.user));
        dispatch(isAuth(true));
        if (response.data.user.role === 'admin') {
            dispatch(dataAdmin(true));
        };
        callback();
    } catch (e) {
        dispatch(collectorErrorMessage(e.response?.data?.message));
    }
};

export const logoutThunk = () => async (dispatch) => {
    try {
        const response = await $api.post('/logout');
        localStorage.removeItem('token');
        dispatch(isAuth(false));
        dispatch(dataAdmin(false));
    } catch (e) {
    }
};

export const checkAuthThunk = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://mebel-tochka.herokuapp.com/api/refresh`, 
        { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);
        dispatch(collectorData(response.data.user));
        dispatch(isAuth(true));
        if (response.data.user.role === 'admin') {
            dispatch(dataAdmin(true));
        };
    } catch (e) {
    }
};