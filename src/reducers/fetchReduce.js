import { GET_FETCH, FETCH_LOADING, FETCH_ERROR } from "../action";

const initialState = {
  content: [],
  loading: false,
  error: false,
};

const fetchReduce = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_FETCH:
      return {
        ...state,
        loading: false,
        content: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchReduce;
