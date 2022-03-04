class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.reset = this.reset.bind(this);
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    subOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', JSON.stringify(this.state.count));
        }
    }

    componentDidMount() {
        try{
            const newCount = JSON.parse(localStorage.getItem('count'));
            if(!isNaN(parseInt(newCount))){
                this.setState(() => ({count: parseInt(newCount)}));
            }
        } catch(e){}
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {count: 0};



ReactDOM.render(<Counter count={2}/>, document.getElementById("root"));

// let count = 0;
// const buttonId = "button-id";
// const addOne = () => {
//     count++;
//     renderCountApp();
// }
// const minusOne = () => {
//     count--;
//     renderCountApp();
// };
// const reset = () => {
//     count = 0;
//     renderCountApp();
// };

// const renderCountApp = () => {
//     let template3 = (
//         <div>
//             <h1 >Count = {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     const appRoot = document.getElementById('root');
//     ReactDOM.render(template3, appRoot);
// };

// renderCountApp();