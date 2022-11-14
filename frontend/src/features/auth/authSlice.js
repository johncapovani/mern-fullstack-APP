//Redux reducers initial state other authentication
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//JSON webtoken is very important
//Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))


//create initial state

const initialState = {

user: user ? user : null,
isError: false,
isSuccess: false,
isLoading: false,
message: ''
}

//create slice

export const authSlice = createSlice({

name: 'auth',
initialState,
//Not Async after we register reset all the functions
reducers: {
reset: (state)=> {

state.isLoading = false
state.isSuccess = false
state.isError = false
state.message = ''
}

},
//Async
extraReducers: ()=>{}

})


export const {reset} = authSlice.actions
export default authSlice.reducer