import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action constants
const INC = "increment";
const DEC = "decrement";
const INC_BY_AMOUNT = "increment_by_amount";
const INIT = "initialize";
const GET_ACCOUNT_FULFILLED = "account/fulfilled";
const GET_ACCOUNT_PENDING = "account/pending";
const GET_ACCOUNT_REJECTED = "account/rejected";

// create Store - 
const Store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

// reducer -
function reducer(state = { amount: 200 }, action) {

    switch (action.type) {
        case INC:
            return { amount: state.amount + 1 };

        case DEC:
            return { amount: state.amount - 1 };

        case INC_BY_AMOUNT:
            return { amount: state.amount + action.payload };

        case INIT:
            return { amount: action.payload };

        case GET_ACCOUNT_FULFILLED:
            return { amount: state.amount + action.payload, pending: false };

        case GET_ACCOUNT_PENDING:
            return {
                amount: state.amount, pending: true
            }

        case GET_ACCOUNT_REJECTED:
            return {
                amount: state.amount, pending: false, error: action.error
            }
        default:
            return state;
    }
}

// subscribe - 
// Store.subscribe(() => {
//     console.log(Store.getState());
// });

// action creator - 
function incrementAmount() {
    return {
        type: INC
    }
}

function decrementAmount() {
    return {
        type: DEC
    }
}

function incrementByAmount(amount) {
    return {
        type: INC_BY_AMOUNT,
        payload: amount
    }
}

function getAccountPending() {
    return {
        type: GET_ACCOUNT_PENDING
    }
}

function getAccountRejected() {
    return {
        type: GET_ACCOUNT_REJECTED
    }
}

function getAccountFulfilled() {
    return {
        type: GET_ACCOUNT_FULFILLED
    }
}

function getAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: GET_ACCOUNT_PENDING });
            const { data } = await axios.get(`http://localhost:3000/account/${id}`);
            dispatch({
                type: GET_ACCOUNT_FULFILLED,
                payload: data.amount
            });
        } catch (err) {
            dispatch({
                type: GET_ACCOUNT_REJECTED,
                error: err.message
            })
        }
    }
}

// dispatch action ;
console.log(Store.getState());

Store.dispatch(getAccount(1)); //async
// Store.dispatch(incrementByAmount(120));

