import ADD_MESSAGE from './listAction';

export default function addMessage(message: string) {
  return ({
    type: ADD_MESSAGE,
    message: message
  });
}
