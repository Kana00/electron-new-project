import { SET_LIGHTER_THEME, SET_DARKER_THEME } from './listeAction';


export function setLighterTheme() {
  return {
    type: SET_LIGHTER_THEME,
    theme: {
      textColor: '#3E3D3E',
      backgroundColorApp: '#FFFFFF',
      titleBarWindowColor: '#DDDDDD',
      navigationBarColor: '#F3F3F3',
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
