import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    userInfo: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        }
    }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
