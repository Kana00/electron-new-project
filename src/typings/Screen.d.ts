interface AppPropsType {
  textColor: string,
  backgroundColorApp: string,
  titleBarWindowColor: string,
  navigationBarColor: string,
}

interface AppStateType {
  backgroundColorApp: string,
  titleBarWindowColor: string,
  textColor: string
}

interface MainPropsType {
  textColor: string,
}

interface NoMatchPropsType {
  textColor: string,
}

interface HomePropsType {
  textColor: string,
  backgroundColor: string,
  monMessage: string,
  showMessage: (message: string)=>void,
  hideMessage: ()=>void,
}

interface HomeStateType {
  timeNow: string,
}

interface ThemePropsType {
  textColor: string,
  backgroundColor: string,
  monMessage: string,
  showMessage: (message: string)=>void,
  hideMessage: ()=>void,
}

interface ThemeStateType {
  timeNow: string,
}
