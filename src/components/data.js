import React from "react";
import PropTypes from 'prop-types';
import '../css/data.css';

const DataDisplay = ({Mapdata}) => Mapdata.map((timelineObjects, index) => {

    // timelineObjects -> activitySegment -> startLocation -> latitudeE7, longitudeE7
    console.log(timelineObjects.activitySegment)

    return (
        <div key={index}>
            <div>sanity check 2</div>
            <div className="data_1">
                {}
            </div>
        </div>
    );
});

export default DataDisplay;