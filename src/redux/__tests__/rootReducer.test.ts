import store from '../store/store';
import { addMessage, removeMessage } from '../action/messageAction';
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../action/listeAction';

describe('Root reducer' , () => {

  describe('Test all action message', () => {
    it('action addMessage works well', () => {
      expect(addMessage('hi !')).toEqual({
        type: ADD_MESSAGE,
        message: 'hi !'
      });
    });
    it('action addMessage works well', () => {
      expect(removeMessage()).toEqual({
        type: REMOVE_MESSAGE,
        message: ''
      });
    });
  });

  describe('Test the rootReducer', () => {
    it('in the case ADD_MESSAGE', () => {
      // setup
      let state = null;

      // act
      store.dispatch({ type: ADD_MESSAGE, message: 'hi !' });
      state = store.getState().rootScreenReducer;

      // test
      expect(state.message).toMatch('hi !');
    });
    it('in the case REMOVE_MESSAGE', () => {
      // setup
      let state = null;

      // act
      store.dispatch({ type: REMOVE_MESSAGE, message: '' });
      state = store.getState().rootScreenReducer;

      // test
      expect(state.message).toMatch('');
    });
    it('in the not defined case', () => {
      // setup
      let state = null;
      const NOT_DEFINED = 'not defined';

      // act
      store.dispatch({ type: NOT_DEFINED, message: 'test' });
      state = store.getState().rootScreenReducer;

      // test
      expect(state.message).toMatch('');
    });
  });

});
