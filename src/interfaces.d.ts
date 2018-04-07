interface GlobalType {
  __REDUX_DEVTOOLS_EXTENSION__: any
}
declare var global: GlobalType;
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
