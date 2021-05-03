import {SYMPTOMS_TRUE, TEST_POSITIVE, ADD_PLACE, REPORT} from '../types';
const initialState = {
  symptomatic: false,
  covid_positive: null,
  places: [],
};

function HealthReducer(state = initialState, action) {
  switch (action.type) {
    case SYMPTOMS_TRUE:
      return {
        ...state,
        symptomatic: true,
      };
    case TEST_POSITIVE:
      return {
        ...state,
        covid_positive: 'positive',
      };
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    case REPORT:
      return {
        symptomatic: false,
        covid_positive: null,
        places: [],
      };

    default:
      return state;
  }
}

export default HealthReducer;
