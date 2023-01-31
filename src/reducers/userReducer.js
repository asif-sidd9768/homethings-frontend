import { createSlice } from "@reduxjs/toolkit"
import userService from "../services/user"

const usersAtStart = []
const initialState = usersAtStart

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAllUsers(state, action){
      return state
    }
  }
})

export const { setAllUsers } = userSlice.actions

export const initializeAllUsers = () => {
  return async (dispatch, getState) => {
    const response = await userService.getAllUsers()
    console.log('users === ', response)
    dispatch(setAllUsers(response.data))
  }
}

export default userSlice.reducer