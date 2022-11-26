import { snackBarTypes } from '../types';

interface SnackInter {
    type : string,
    payload : string
}

const initState = { snackbarState : false , snackBarMessage : '' }

export const snackBarReducer = (state = initState, action : SnackInter) => {
    switch (action.type ) {
        
        case snackBarTypes.SNACKBAR_STATE:
        return {...state, snackbarState : action.payload}

        case snackBarTypes.SNACKBAR_MESSAGE:
        return {...state, snackBarMessage : action.payload}

        default:
        return state;
    }
}