const initialState = {
  favoriteCompanies: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteCompanies: {
          ...state.favoriteCompanies,
          content: [...state.favoriteCompanies.content, action.payload],
        },
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteCompanies: {
          ...state.favoriteCompanies,
          content: state.favoriteCompanies.content.filter(
            (company) => company._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
