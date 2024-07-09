import { GET_FETCH } from "../action";

const initialState = {
  content: [],
};
const fetchReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_FETCH:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default fetchReduce;
