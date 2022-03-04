import React from 'react';
const Option = (props) => (
    <div className="option">
        <li className="option__text">{props.count}. {props.item}</li>
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.item);
            }}
            className="button button--link">
            remove
            </button>
    </div>
);

export default Option;