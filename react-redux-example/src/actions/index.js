import axios from "axios";


// action constants
export const INC = "account/increment";
export const DEC = "account/decrement";
export const INC_BY_AMOUNT = "increment_by_amount";
export const INIT = "account/initialize";
export const GET_ACCOUNT_FULFILLED = "account/getUser/fulfilled";
export const GET_ACCOUNT_PENDING = "account/getUser/pending";
export const GET_ACCOUNT_REJECTED = "account/getUser/rejected";
export const INC_BONUS = "bonus/increment";


// action creator - 
export function incrementAmount() {
    return {
        type: INC
    }
}

export function decrementAmount() {
    return {
        type: DEC
    }
}

export function incrementByAmount(amount) {
    return {
        type: INC_BY_AMOUNT,
        payload: amount
    }
}

export function getAccountPending() {
    return {
        type: GET_ACCOUNT_PENDING
    }
}

export function getAccountRejected(error) {
    return {
        type: GET_ACCOUNT_REJECTED,
        error: error
    }
}

export function getAccountFulfilled(amount) {
    return {
        type: GET_ACCOUNT_FULFILLED,
        payload: amount
    }
}

export function getAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountPending());
            const { data } = await axios.get(`http://localhost:300/accounts/${id}`);
            dispatch(getAccountFulfilled(data.amount));
        } catch (err) {
            dispatch(getAccountRejected(err.message))
        }
    }
}


export function incrementBonus() {
    return {
        type: INC_BONUS
    }
}
