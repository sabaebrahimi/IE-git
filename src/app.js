import React from 'react';
import ReactDOM from "react-dom";
import IndecisionApp from './components/indesicion-app';
import './styles/style.scss';
import 'normalize.css/normalize.css';

class App extends React.Component {
    render() {
        return(
            <div>
                {/* {this.props.children}
                {this.props.template} */}
                <IndecisionApp />
            </div>
        );
    }
}

const template = (
    <div>this is jsx</div>
)

ReactDOM.render(<App />, document.getElementById("root"));