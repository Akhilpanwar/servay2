import { createSlice } from "@reduxjs/toolkit";
import  {survey} from '../components/survey'
import {PageData} from '../components/Pages';
const initialState={}
const surveySlice=createSlice({
name:"survey",
initialState,
reducers:{
getData(state,action){
    state.push(survey)
}
}



},
{
    name:"pages",
    initialState,
    reducers:{
        postData(state,action){
          state.push(PageData)
        }
    }
}
)
export const {getData,postData}=surveySlice.actions;
export default surveySlice.reducer;