/**
 * https://www.metaltoad.com/blog/overview-redux-middleware-react-applications
 * KNOWLEDGE:
 * Calling next continues the propagation of the current action. 
   It's important to not alter the action and to call it once and only once within a middleware.
  
 * Calling store.dispatch starts the new action from the beginning of the pipeline. 
   This can be called as many times as needed from within middleware. 
   For example, in response to receiving new data from an API call, or an error.
 */

import * as IActions from '../utils/IActionsConstants';

const apiMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    // only catch a specific action
    case IActions.DUMMY_ACTION:
      // continue propagating the action through redux
      // this is our only call to next in this middleware
      next(action);
      // FROM here a api can be invoked and we can progpogate the event to reducers.
      //
      break;
 
    // if we don't need to handle this action, we still need to pass it along
    default: next(action)
  }
}
 
export default apiMiddleware