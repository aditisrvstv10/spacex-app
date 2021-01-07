import React from 'react';

function SpaceXPrograms(props){
    let {spaceXPrograms}=props

    return(
        <div className="program-section">
            {spaceXPrograms && spaceXPrograms.length > 0 ? spaceXPrograms.map((program, index) => {
                return <div className="program-box" key={index}>
                    <div className="program-img">
                        <img alt="" src={program.links.mission_patch_small} className="prog-img"></img>
                    </div>
                    <div className="title-tag" style={{color: "#063db9"}}>
                        <div className="title">{program.mission_name + " #" + program.flight_number}</div>
                    </div>
                    <div className="title-tag">
                        <div className="title">Mission Ids:</div>
                        {<ul>{program.mission_id.map(id => {return <li key={id} style={{color: "#063db9"}}>{id}</li>})}</ul>}
                    </div>
                    <div className="title-tag">
                        <div className="title">Launch Year:</div>
                        <div style={{color: "#063db9"}}>{program.launch_year}</div>
                    </div>
                    <div className="title-tag">
                        <div className="title">Succesful Launch:</div>
                        <div style={{color: "#063db9"}}>{" "+program.launch_success}</div>
                    </div>
                    <div className="title-tag">
                        <div className="title">Successful Landing:</div>
                        <div style={{color: "#063db9"}}>{" "+program.launch_success}</div>
                    </div>
                </div>
            }) : ""}
        </div>
    )
}

export default (SpaceXPrograms)