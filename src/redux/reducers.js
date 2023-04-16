import { combineReducers } from '@reduxjs/toolkit';
import marsRoverReducer from './marsReducer'
import apodReducer from './apodReducer';


const rootReducer = combineReducers({
    marsRover: marsRoverReducer,
    apod: apodReducer
// add your user slice reducer here
  // add more slice reducers as needed
});
export default rootReducer;
