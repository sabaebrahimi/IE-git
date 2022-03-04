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
        alert(this.state.
            options[Math.floor(Math.random() *
                this.state.options.length)]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (item) => item !== option
            )
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options)
                this.setState(() => ({ options: options }));
        } catch (error) {

        }

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
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indesicion"
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions}
                onClick={props.handlePick}>
                What Should I do?</button>
        </div>
    );
}

const Options = (props) => {
    let count = 0;
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}>
                Remove all
            </button>
            {props.options.length === 0 && 
            <p>Please add an option to get started</p>}
            <ol>
                {
                    props.options.map((val) => (
                        <Option
                            item={val}
                            key={count++}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <li>{props.item}</li>
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.item);
                }}>
                remove
            </button>
        </div>
    );
}

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
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.submitForm}>
                    <input type="text" name="option" />
                    <button>add option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById("root"));