import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className={"task " + props.status}>
            <h4 className="item">{props.text}</h4>
            <div className="buttons">
                <input type="checkbox" name="done" value="done" onChange={props.checkbox} />
                <button className="btn-remove" onClick={props.remove}> </button>
            </div>
        </div>
    );
};

export default Task;
