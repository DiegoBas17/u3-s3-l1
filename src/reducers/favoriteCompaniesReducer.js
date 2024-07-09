import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action";

const initialState = {
  content: [],
};

const favoriteCompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        content: state.content.filter(
          (company) => company._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default favoriteCompaniesReducer;
