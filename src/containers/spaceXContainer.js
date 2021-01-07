import { connect } from 'react-redux';
import SpaceXComponent from '../components/spaceXComponent';
import {getAllSpaceXPrograms, getAllSpaceXProgramsSuccess, getAllSpaceXProgramsFailure, setFilterParams} from '../actions/spaceXAction'

export const mapStateToProps = (state)=>{
    return {
        spaceXPrograms: state.spaceXReducer.spaceXPrograms,
        filterParams: state.spaceXReducer.filterParams
    }
}

export const mapDispatchToProps = (dispatch)=>{
    return {
        getAllSpaceXPrograms: (param) => {
              dispatch(getAllSpaceXPrograms(param)).then((response) => {
                dispatch(getAllSpaceXProgramsSuccess(response.payload.data))
              }).catch((error) => {
                dispatch(getAllSpaceXProgramsFailure(error))
              })
        },

        setFilterParams: (params) => {
          dispatch(setFilterParams(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXComponent);