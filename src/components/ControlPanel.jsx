import React from 'react';

const ControlPanel = props => {
    return(
        <div>
            Control Panel
            <p>{props.config.algorithm}</p>
            <div className="input-field col s12">
                <select onChange={props.setAlgorithm}>
                    <option defaultValue disabled>Choose your option</option>
                    <option value="merge">Merge Sort</option>
                    <option value="bubble">Bubble Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="insertion">Insertion Sort</option>
                </select>
                <label>Sorting Algorithm Select</label>
            </div>


            <p>{`${props.config.array}`}</p>

            <div className="input-field col s12">
                <select onChange={props.setArrayLength}>
                    <option defaultValue disabled>Choose your option</option>
                    <option value="10">10 Values</option>
                    <option value="20">20 Values</option>
                    <option value="30">30 Values</option>
                    <option value="40">40 Values</option>
                    <option value="50">50 Values</option>
                    <option value="60">60 Values</option>
                    <option value="70">70 Values</option>
                    <option value="80">80 Values</option>
                    <option value="90">90 Values</option>\
                    <option value="100">100 Values</option>
                </select>
                <label>Array Length Select</label>
            </div>

            <button onClick={props.setArrayValues}> Random</button>
        </div>
    )
}

export default ControlPanel;