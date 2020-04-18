import {userConstants} from '../constants';

const initialState = {
  isUpdating: false,
  isError: false,
  isUpdated: false
}

export default (state = initialState, action) => {
    switch(action.type){
      case userConstants.UPDATE_PROFILE_REQUEST: 
        return {
          ...state,
          isUpdating: true,
        }
      case userConstants.UPDATE_PROFILE_SUCCESS: 
        return {
          ...state,
          isUpdating: false,
          isUpdated: true
        }
      case userConstants.UPDATE_PROFILE_FAILURE: 
        return {
          ...state,
          isError: true,
          isUpdating: false
        }
        default:
          return state;
    }
}