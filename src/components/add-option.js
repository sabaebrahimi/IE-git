import React from 'react';
export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    submitForm = (event) => {
        event.preventDefault();
        let option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        event.target.elements.option.value = "";
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {
                    this.state.error && <p className="add-option-error">{this.state.error}</p>
                }
                <form onSubmit={this.submitForm} className="add-option">
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">add option</button>
                </form>
            </div>
        );
    }
}