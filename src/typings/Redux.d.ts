/* ----------------------------- Redux ----------------------------- */
interface combinedReducerType {
  rootScreenReducer: MessageStateType,
  themeReducer: ThemeStateType,
}

type ActionAvailableToDispatch = (args?: any)=>object;

// -------------------------- Root reducer --------------------------
interface MessageActionType {
  readonly type: string,
  message: string,
}
interface MessageStateType {
  message: string,
}

// -------------------------- Theme reducer --------------------------
interface ThemeActionType {
  readonly type: string,
  theme: {
    textColor: string,
    backgroundColorApp: string,
    titleBarWindowColor: string,
    navigationBarColor: string,
  }
}
interface ThemeStateType {
  textColor: string,
  backgroundColorApp: string,
  titleBarWindowColor: string,
  navigationBarColor: string,
}
