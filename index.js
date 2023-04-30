import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action constants
const INC = "account/increment";
const DEC = "account/decrement";
const INC_BY_AMOUNT = "increment_by_amount";
const INIT = "account/initialize";
const GET_ACCOUNT_FULFILLED = "account/getUser/fulfilled";
const GET_ACCOUNT_PENDING = "account/getUser/pending";
const GET_ACCOUNT_REJECTED = "account/getUser/rejected";
const INC_BONUS = "bonus/increment"

// create Store - 
const Store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default, thunk.default));

// creating multiple reducers -
function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        // extra case its called - related to other action (accountReducer)
        case INC_BY_AMOUNT:
            if (action.payload >= 100)
                return { points: state.points + 1 };
            else
                return state;

        case INC_BONUS:
            return { points: state.points + 1 };

        default:
            return state;
    }
}


function accountReducer(state = { amount: 200 }, action) {

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
            return { amount: action.payload, pending: false };

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

function getAccountRejected(error) {
    return {
        type: GET_ACCOUNT_REJECTED,
        error: error
    }
}

function getAccountFulfilled(amount) {
    return {
        type: GET_ACCOUNT_FULFILLED,
        payload: amount
    }
}

function getAccount(id) {
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


function incrementBonus() {
    return {
        type: INC_BONUS
    }
}

// dispatch action ;
console.log(Store.getState());
// Store.dispatch(getAccount(1)); //async
// Store.dispatch(incrementByAmount(120));
// Store.dispatch(incrementByAmount(12));
// Store.dispatch(incrementByAmount(200));


