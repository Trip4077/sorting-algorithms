import React from 'react';

const ControlPanel = props => {
    return(
        <div>
            Control Panel
            <p>{props.config.algorithm}</p>
            <p>{`${props.config.array}`}</p>
            <p>{props.config.arrayLength}</p>

            <button onClick={props.setArrayValues}> Random</button>
            <button onClick={props.setArrayLength}> Length</button>
        </div>
    )
}

export default ControlPanel;