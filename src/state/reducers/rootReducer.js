import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SERIES_INDEX_DATA:
      return {
        ...state,
        ...action.payload,
      };
  }
};

export default rootReducer;
