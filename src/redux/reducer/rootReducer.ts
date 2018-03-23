import ADD_MESSAGE from '../action/listAction';

const initialState = {
  message: '',
};

interface ActionObj {
  type: string,
  message: string
}

const rootReducer = (state = initialState, action: ActionObj) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.message = Object.assign({}, action.message);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
