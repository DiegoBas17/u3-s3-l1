export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_FETCH = "GET_FETCH";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchReduceAction = (query) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOADING });
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const jobs = await response.json();
        dispatch({ type: GET_FETCH, payload: jobs.data });
      } else {
        dispatch({ type: FETCH_ERROR });
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
      console.log(error);
    }
  };
};
