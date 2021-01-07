import axios from 'axios';

export const GET_SPACEX_PROGRAMS = "GET_SPACEX_PROGRAMS"
export const GET_SPACEX_PROGRAMS_SUCCESS = "GET_SPACEX_PROGRAMS_SUCCESS"
export const GET_SPACEX_PROGRAMS_FAILURE = "GET_SPACEX_PROGRAMS_FAILURE"

export const SET_FILTER_PARAMS = "SET_FILTER_PARAMS"

const spaceXApi = 'https://api.spaceXdata.com'

export function doActionGet(config, method) {
	if (config) {
		return axios({
			url: `${spaceXApi}/` + config.url,
			method: method,
		})
	}
}

export const getFinalUrl = (filterParams, isHistory) => {
  let getUrl = 'v3/launches?limit=100';
  if(isHistory && window.location.href.indexOf('v3/') > -1)
    getUrl = `launches?limit=100`

  if(!!filterParams){
      if(filterParams.launch_success == false || !!filterParams.launch_success)
          getUrl += `&launch_success=` + filterParams.launch_success 
      if(filterParams.land_success == false || !!filterParams.land_success)
          getUrl += `&land_success=` + filterParams.land_success 
      if(filterParams.launch_year == false || !!filterParams.launch_year)
          getUrl += `&launch_year=` + filterParams.launch_year 
  }
  return getUrl
}

export const getAllSpaceXPrograms = (filterParams) => {
    let finalUrl = getFinalUrl(filterParams)
    const request = doActionGet({ url: finalUrl }, "GET")
    return {
      type: GET_SPACEX_PROGRAMS,
      payload: request
    }
  }

  export const getAllSpaceXProgramsSuccess = (details) => {
    return {
      type: GET_SPACEX_PROGRAMS_SUCCESS,
      payload: details
  
    };
  }

  export const getAllSpaceXProgramsFailure = (error) => {
    return {
      type: GET_SPACEX_PROGRAMS_FAILURE,
      payload: error
    };
  } 

  export const setFilterParams = (params) => {
    return {
      type: SET_FILTER_PARAMS,
      payload: params
    }
  }