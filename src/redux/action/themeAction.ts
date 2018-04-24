import { SET_LIGHTER_THEME, SET_DARKER_THEME } from './listeAction';


export function setLighterTheme() {
  return {
    type: SET_LIGHTER_THEME,
    theme: {
      textColor: '#343434',
      backgroundColorApp: '#F4F4F4',
      titleBarWindowColor: '#FFFFFF',
      navigationBarColor: '#FFFFFF',
    }
  }
}

export function setDarkerTheme() {
  return {
    type: SET_DARKER_THEME,
    theme: {
      textColor: '#BBBBBB',
      backgroundColorApp: '#171B23',
      titleBarWindowColor: '#282C34',
      navigationBarColor: '#282C34',
    }
  }
}
