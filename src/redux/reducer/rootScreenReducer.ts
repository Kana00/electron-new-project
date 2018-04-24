import { ADD_MESSAGE, REMOVE_MESSAGE } from '../action/listeAction';

const initialState: MessageStateType = {
  message: '',
};

export default function rootScreenReducer( state: MessageStateType = initialState, action: MessageActionType ): MessageStateType {
  switch (action.type) {
    case ADD_MESSAGE:
        state = Object.assign({}, {message : action.message});
        return state;
      case REMOVE_MESSAGE:
        state = Object.assign({}, {message : action.message});
        return state;
    default:
      return state;
  }
}

// note :
// Object.assign allow you to not assigne by reference but rather by value
// If you don't use it, the store will not notify that you want a refresh state in react
// Remember that state must be immutable and reducer is a pure function
