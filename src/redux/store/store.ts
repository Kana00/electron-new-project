import { Store } from 'react-redux';
import { createStore, combineReducers } from 'redux';


/* ---------- step 1 : Import all you reducer here ---------- */
import rootScreenReducer from '../reducer/rootScreenReducer';
/* ---------------------------------------------------------- */


/// <reference path="../../interfaces.d.ts" />
/* ------------ step 2 : Combine all you reducer ------------ */
const combinedReducer = combineReducers(
  {
    rootScreenReducer
  }
)
/* ---------------------------------------------------------- */

const store: Store<combinedReducerType> = createStore(combinedReducer);
export default store;
