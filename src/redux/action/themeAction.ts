import { SET_LIGHTER_THEME, SET_DARKER_THEME } from './listeAction';


export function setLighterTheme() {
  return {
    type: SET_LIGHTER_THEME,
    theme: {
      textColor: '#BCD7E5',
      backgroundColorApp: '#103142',
      titleBarWindowColor: '#112027',
      navigationBarColor: '#0F2027',
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
