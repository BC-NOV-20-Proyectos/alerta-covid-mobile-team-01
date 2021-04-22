import axios from 'axios';
import {ADD_PLACE} from '../types';
import {GetPlace} from '../../utils/constants/api';


function place(place){
    return {
        type: ADD_PLACE,
        payload: place
    }
}

export function PlaceFetch(token) {
    return async (dispatch) => {
      try {
        const res = await axios.get(GetPlace, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data)
        dispatch(place(res.data));
      } catch (err) {
        console.error(err)
      }
    };
  }

