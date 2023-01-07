import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./surveySlice";

 const store=configureStore({
    reducer:{
       survey:Reducer,
        
    }
})
export default store;