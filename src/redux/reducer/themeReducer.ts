import { SET_DARKER_THEME, SET_LIGHTER_THEME } from '../action/listeAction';

const initialState = {
  textColor: '#BBBBBB',
  backgroundColorApp: '#171B23',
  titleBarWindowColor: '#282C34',
  navigationBarColor: '#282C34',
}

export default function themeReducer(state: ThemeStateType = initialState, action: ThemeActionType): ThemeStateType {
  switch (action.type) {
    case SET_DARKER_THEME:
      state = Object.assign({}, action.theme);
      return state;;
    case SET_LIGHTER_THEME:
      state = Object.assign({}, action.theme);
      return state;
    default:
      return state;
  }
}
