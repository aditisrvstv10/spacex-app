import React, { Fragment, useEffect} from 'react';
import SpaceXFilter from './spaceXFilter'
import SpaceXPrograms from './spaceXPrograms'

function SpaceXComponent(props){
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    useEffect(() => {

        let launchSuccess = getParameterByName("launch_success")
        let landSuccess = getParameterByName("land_success")
        let launchYear = getParameterByName("launch_year")

        // window.location.href.split("launch_success=")[1]
        // let landSuccess = window.location.href.split("land_success=")[1]
        // let launchYear = window.location.href.split("launch_year=")[1]

        let params = {
            launch_success: launchSuccess,
            land_success: landSuccess,
            launch_year: launchYear
        }
        props.setFilterParams(params)
        props.getAllSpaceXPrograms(params)
    }, []);

    return(
        <Fragment>
            <div className="spacex-comp">
                <SpaceXFilter {...props}/>
                <SpaceXPrograms {...props}/>
            </div>
            <div className="title-tag" style={{"justifyContent": "center"}}><div className="title">Developed by: </div>Aditi Srivastava</div>
        </Fragment>
    )
}

export default (SpaceXComponent)