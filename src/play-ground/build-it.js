class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        };
        this.visibilityHandler = this.visibilityHandler.bind(this);
    }
    visibilityHandler() {
        this.setState((prevState) => {
            return {isHidden: !prevState.isHidden};
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.visibilityHandler}>
                    {this.state.isHidden ? "show text" : "hide text"}</button>
                <Details isHidden={this.state.isHidden}/>
            </div>
        );
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {!this.props.isHidden && <p>this is the hidden text</p> }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));


// let isHidden = true;
// const showAndHide = () => { isHidden = !isHidden; renderVisibiltyApp() };

// const renderVisibiltyApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showAndHide}>{isHidden ? "show text" : "hide text"}</button>
//             {
//                 !isHidden && <p>This is the text which shows after the button is clicked</p>
//             }
//         </div>
//     );
//     const root = document.getElementById("root");
//     ReactDOM.render(template, root);
// };
// renderVisibiltyApp();