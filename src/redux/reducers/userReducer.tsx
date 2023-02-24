import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice({
   name: 'user',
   initialState:{
     name: '',
     email: '',
     github: '',
     level: 0 | 1,
     currentStep: 0
   },
   reducers:{
    setName: (state, action) =>{
     state.name = action.payload
    },
    setEmail: (state, action) =>{
     state.email = action.payload
    },
    setGithub: (state, action) =>{
     state.github = action.payload
    },
    setLevel: (state, action) =>{
     state.level = action.payload
    },
    setCurrentStep: (state, action) =>{
     state.currentStep = action.payload
    }
   }
})


export const {setName,setEmail,setLevel,setCurrentStep,setGithub} = slice.actions
export default slice.reducer