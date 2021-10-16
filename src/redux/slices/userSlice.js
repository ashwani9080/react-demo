import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    firstname: '',
    lastname: '',
}

export const userSilce = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => state.firstname = action.payload.firstname,
        setLastName: (state, action) => state.lastname = action.payload.lastname
    }
})

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName } = userSilce.actions

export default userSilce.reducer