import {SYMPTOMS_TRUE, TEST_POSITIVE, ADD_PLACE} from '../types';
const initialState = {
  symptoms: false,
  test: null,
  places: [],
};

function HealthReducer(state = initialState, action) {
  switch (action.type) {
    case SYMPTOMS_TRUE:
      return {
        ...state,
        symptoms: true,
      };
    case TEST_POSITIVE:
      return {
        ...state,
        test: 'positive',
      };
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload],
      };

    default:
      return state;
  }
}

export default HealthReducer;
