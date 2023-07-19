import {configureStore} from "@reduxjs/toolkit"
import todoreducer from "../Reducer/reducer"
 const store=configureStore({
    reducer:todoreducer
 })
 export default store;