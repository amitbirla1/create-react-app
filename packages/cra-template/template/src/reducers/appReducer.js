import * as IAction from '../utils/IActionsConstants';

const getInitialState = () => ({
   data:null
});

export const appReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case IAction.DUMMY_ACTION:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};