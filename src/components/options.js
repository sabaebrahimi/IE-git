import React from 'react';
import Option from './option';
const Options = (props) => {
    let count = 0;
    return (
        <div>
            <div className="widget-header">
                <h3>
                    Your Options
                </h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>
                    Remove all
                </button>
            </div>
            {props.options.length === 0 &&
                <p className="widget__message">Please add an option to get started</p>}
            <ol>
                {
                    props.options.map((val, index) => (
                        <Option
                            item={val}
                            key={count++}
                            count={index + 1}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ol>
        </div>
    )
};

export default Options;