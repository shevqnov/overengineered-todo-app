import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from "redux";
import * as actions from './actions'
import { View } from './types';

export type VisibilityFilterActions = ActionType<typeof actions>

const reducer: Reducer<View, VisibilityFilterActions> = (state = View.All, action) => {
  switch (action.type) {
    case (getType(actions.setVisibility)):
      return action.payload
    default: return state
  }
}

export default reducer