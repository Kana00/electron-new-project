/**
 * Why a file reserved actions ?
 * the actions sent to the reducer must always be formatted in the same way
 */


import { ADD_MESSAGE, REMOVE_MESSAGE } from './listeAction';

/* ---------------------------------- Actions ---------------------------------- */
export function addMessage(message: string): MessageActionType {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}

export function removeMessage(): MessageActionType {
  return {
    type: REMOVE_MESSAGE,
    message: ''
  };
}
