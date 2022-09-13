import { snackBarTypes } from "../types";

export const snackBarStatus = (status) => ({ type: snackBarTypes.SNACKBAR_STATE, payload: status });
export const snackBarMessage = (status) => ({ type: snackBarTypes.SNACKBAR_MESSAGE, payload: status });