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
 * @param onOverColor when mouse is hover on the element, the color must change in this color
 */
interface WindowsWindowControlPropsType {
  colorOfControl: string,
  height: string,
  onOverColor: string
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
