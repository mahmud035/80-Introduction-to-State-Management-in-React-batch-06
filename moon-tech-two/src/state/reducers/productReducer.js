import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from '../actionTypes/actionTypes';

export const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action?.payload,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
