import React from 'react';

const Graph = props => {
    return(
        <div>
            {
                props.data.map(num => <span>{num}, </span>)
            }
        </div>
    )
}

export default Graph;