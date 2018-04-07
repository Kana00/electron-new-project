interface Global {
  __REDUX_DEVTOOLS_EXTENSION__: any
}
declare var global: Global;
/* --------------------------- Component --------------------------- */

interface AppPropsType extends React.Props<any> {

}


/* ----------------------------- Redux ----------------------------- */
interface combinedReducerType {
  rootScreenReducer: MessageStateType
}
// Root reducer
interface MessageActionType {
  readonly type: string,
  message: string,
}
interface MessageStateType {
  message: string,
}
