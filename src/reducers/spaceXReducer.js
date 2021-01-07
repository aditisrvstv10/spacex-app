import {
    GET_SPACEX_PROGRAMS, GET_SPACEX_PROGRAMS_SUCCESS, GET_SPACEX_PROGRAMS_FAILURE, SET_FILTER_PARAMS
} from "../actions/spaceXAction"
  
  const INITIAL_STATE = {
    spaceXPrograms: undefined,
    filterParams: {
      launch_success: null,
      land_success: null,
      launch_year: null
    }
  }
  
export default function (state, action) {
    if (typeof state === 'undefined') {
      return INITIAL_STATE
    }
    switch (action.type) {
      case GET_SPACEX_PROGRAMS:
        return { ...state, spaceXPrograms: state.spaceXPrograms ? state.spaceXPrograms : undefined }
      case GET_SPACEX_PROGRAMS_SUCCESS:
        return { ...state, spaceXPrograms: action.payload }
      case GET_SPACEX_PROGRAMS_FAILURE:
        return { ...state, spaceXPrograms: "Error" }

      case SET_FILTER_PARAMS: 
        return {...state, filterParams: action.payload}
        
        default:
                return {...state}
    }
}