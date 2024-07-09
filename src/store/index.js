import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteCompaniesReducer from "../reducers/favoriteCompaniesReducer";
import fetchReduce from "../reducers/fetchReduce";

const rootReducer = combineReducers({
  favoriteCompanies: favoriteCompaniesReducer,
  fetchJobs: fetchReduce,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
