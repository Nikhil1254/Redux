import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    amount: 100
}

export const getUserById = createAsyncThunk(
    'account/getUserById',
    async (userId, thunkAPI) => {

        const { data } = await axios.get(`http://localhost:8000/accounts/${userId}`)
        return data.amount;

    }
)

// name property is very important, will be used in action constants eg. "account/increment", "account/decrement" so it will not clash in other reducer
// reducer name will be like accountReducer 
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        // it's like switch cases we used to have
        increment: (state) => {
            state.amount += 1; // immer library
        },

        decrement: (state) => {
            state.amount -= 1;
        },

        incrementByAmount: (state, action) => {
            state.amount += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserById.pending, (state, action) => {
            state.pending = true;
            state.error = null;
        })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.amount = action.payload;
                state.pending = false;
                state.error = null;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.pending = false;
                state.error = action.error.message;
            });
    }
})

//name should be same as what we have in reducers
export const { increment, decrement, incrementByAmount } = accountSlice.actions; // will give us action creators

export default accountSlice.reducer; // will give us reducer