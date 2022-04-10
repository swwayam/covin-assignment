import apiData from './apiData'
import apiData1 from './apiData1'
import  {combineReducers} from 'redux'

const allReducer = combineReducers({
    userData: apiData, 
    userData1: apiData1 

})

export default allReducer;