class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState(prevState => ({ options: prevState.options.concat([option]) }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState(prevState => ({
            options: prevState.options.filter(item => item !== option)
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) this.setState(() => ({ options: options }));
        } catch (error) {}
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        const subTitle = "Put your life in the hands of a computer!";
        return React.createElement(
            'div',
            null,
            React.createElement(Header, { subTitle: subTitle }),
            React.createElement(Action, {
                hasOptions: this.state.options.length > 0,
                handlePick: this.handlePick
            }),
            React.createElement(Options, {
                options: this.state.options,
                handleDeleteOptions: this.handleDeleteOptions,
                handleDeleteOption: this.handleDeleteOption
            }),
            React.createElement(AddOption, {
                handleAddOption: this.handleAddOption
            })
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }

const Header = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: "Indesicion"
};

const Action = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions,
                onClick: props.handlePick },
            'What Should I do?'
        )
    );
};

const Options = props => {
    let count = 0;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handleDeleteOptions },
            'Remove all'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        React.createElement(
            'ol',
            null,
            props.options.map(val => React.createElement(Option, {
                item: val,
                key: count++,
                handleDeleteOption: props.handleDeleteOption
            }))
        )
    );
};

const Option = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            null,
            props.item
        ),
        React.createElement(
            'button',
            {
                onClick: e => {
                    props.handleDeleteOption(props.item);
                } },
            'remove'
        )
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            error: undefined
        };
    }
    submitForm(event) {
        event.preventDefault();
        let option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        event.target.elements.option.value = "";
        this.setState(() => ({ error }));
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.state.error && React.createElement(
                'p',
                null,
                this.state.error
            ),
            React.createElement(
                'form',
                { onSubmit: this.submitForm },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'add option'
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("root"));
