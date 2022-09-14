import { snackBarTypes } from '../types';


const initState = { snackbarState : false, snackBarMessage : '' }

export const snackBarReducer = (state = initState, action) => {
    switch (action.type) {
        
        case snackBarTypes.SNACKBAR_STATE:
            console.log(action.payload)
        return {...state, snackbarState : action.payload}

        case snackBarTypes.SNACKBAR_MESSAGE:
        return {...state, snackBarMessage : action.payload}

        default:
        return state;
    }
}