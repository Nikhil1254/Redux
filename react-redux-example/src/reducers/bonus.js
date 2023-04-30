import { INC_BONUS, INC_BY_AMOUNT } from "../actions";

export default function bonusReducer(state = { points: 0 }, action) {
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