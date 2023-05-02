import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 10
}

const incrementByAmount = createAction("account/incrementByAmount")

const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        increment: (state) => {
            // its like switch cases in reducer we used to have
            state.points += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementByAmount, (state, action) => {
                if (action.payload >= 100)
                    state.points++;
            })
    }
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;