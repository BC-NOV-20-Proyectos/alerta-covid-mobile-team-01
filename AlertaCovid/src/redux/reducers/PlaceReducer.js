import {NEW_PLACE} from '../types';
const initialState = {
    places: [],
  };

  function PlaceReducer(state = initialState, action){
      switch(action.type){
          case NEW_PLACE:
              return { 
                  ...state,
                  places: action.payload
              }
              default: // need this for default case
              return state 
           }
      }
  

  export default PlaceReducer;