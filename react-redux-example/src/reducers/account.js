import { DEC, GET_ACCOUNT_FULFILLED, GET_ACCOUNT_PENDING, GET_ACCOUNT_REJECTED, INC, INC_BY_AMOUNT } from "../actions";

export default function accountReducer(state = { amount: 200 }, action) {

    switch (action.type) {
        case INC:
            return { amount: state.amount + 1 };

        case DEC:
            return { amount: state.amount - 1 };

        case INC_BY_AMOUNT:
            return { amount: state.amount + action.payload };

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