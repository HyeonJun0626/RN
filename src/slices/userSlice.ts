import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});
