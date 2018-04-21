import { Store } from 'react-redux';
import { createStore, combineReducers } from 'redux';

/* ---------- step 1 : Import all you reducer here ---------- */
import rootScreenReducer from '../reducer/rootScreenReducer';
/* ---------------------------------------------------------- */

/* ------------ step 2 : Combine all you reducer ------------ */
const combinedReducer = combineReducers(
  {
    rootScreenReducer,
  },
);

/* ---------------------------------------------------------- */
const store: Store<combinedReducerType> = createStore(combinedReducer,
  /* preloadedState, */ global.__REDUX_DEVTOOLS_EXTENSION__
  && global.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
