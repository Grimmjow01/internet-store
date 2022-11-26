import { snackBarTypes } from "../types";

export const snackBarStatus = (status : boolean) => ({ type: snackBarTypes.SNACKBAR_STATE, payload: status });
export const snackBarMessage = (status : string) => ({ type: snackBarTypes.SNACKBAR_MESSAGE, payload: status });