import axios from 'axios';
import {NEW_PLACE} from '../types';
import {GetPlace} from '../../utils/constants/api';


function place(place){
    return {
        type: NEW_PLACE,
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
        console.log(res.data.data)
        dispatch(place(res.data.data));
      } catch (err) {
        console.error(err)
      }
    };
  }
