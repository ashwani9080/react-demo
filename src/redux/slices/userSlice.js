import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstname: '',
    lastname: '',
    details: {},
    accessToken: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userDetails: (state, action) => { state.details = action.payload },
        setAccessToken: (state, action) => { state.accessToken = action.payload }
    }
})

// Action creators are generated for each case reducer function
export const { userDetails, setAccessToken } = userSlice.actions

export default userSlice.reducer