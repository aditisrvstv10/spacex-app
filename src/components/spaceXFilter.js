import React from 'react';
import {getFinalUrl} from '../actions/spaceXAction'
// import {withRouter} from 'react-router'
const yearList=[2006,2008,2010,2012,2014,2016,2018,2020]

function SpaceXFilter(props){
     const toggleFilter =(status, params)=> {
        let {filterParams} = props
        let updatedParams = {...filterParams, [params]: status}
        props.setFilterParams(updatedParams)
        props.history.push(getFinalUrl(updatedParams, true))
        props.getAllSpaceXPrograms(updatedParams)
    }

    return(
        <div className="filter-box">
            <div className="filter-head">Filters</div>
            <div className="filter-title">Launch Year</div>
            <table className="filter-sec">
                {
                    yearList.map((year, index) => {
                        return <tr key={index}>
                                <td><button key={index} className="year-button" onClick={()=>toggleFilter(year,"launch_year")}>{year}</button></td>
                                {year !== 2020 ? <td><button key={index + 1} className="year-button" onClick={()=>toggleFilter(year+1,"launch_year")}>{year + 1}</button></td> : ""}
                            </tr>
                    })
                }
            </table>
            <div className="filter-title">Successful Launch</div>
            <div className="filter-sec">
                <button className="year-button" onClick={()=>toggleFilter(true, "launch_success")}>True</button>
                <button className="year-button" onClick={()=>toggleFilter(false, "launch_success")}>False</button>
            </div>
            <div className="filter-title">Successful Landing</div>
            <div className="filter-sec">
                <button className="year-button" onClick={()=>toggleFilter(true, "land_success")}>True</button>
                <button className="year-button" onClick={()=>toggleFilter(false, "land_success")}>False</button>
            </div>
        </div>
    )
}

export default (SpaceXFilter)