import {ADD_PLACE, SYMPTOMS_TRUE, TEST_POSITIVE} from '../types';

export function symptoms_true() {
  return {
    type: SYMPTOMS_TRUE,
  };
}

export function test_positive() {
  return {
    type: TEST_POSITIVE,
  };
}
