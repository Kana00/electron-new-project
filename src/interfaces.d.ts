interface GlobalType {
  __REDUX_DEVTOOLS_EXTENSION__: any
}
declare var global: GlobalType;
/* --------------------------- Component --------------------------- */

interface AppPropsType {

}

interface HomeStateType {
  timeNow: string,
}

/**
 * @param colorOfControl a color in format hexadecimal color
 * @param height size of height image in pixel
 */
interface WindowsWindowControlPropsType {
  colorOfControl: string,
  height: string
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
