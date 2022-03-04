const appObject = {
    title: "Indecision app",
    subTitle: "this is some info",
    options: []
}

const numbers = [1, 2, 3];

const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.oo.value);
    const option = event.target.elements.oo.value;
    if (option) {
        appObject.options.push(option);
        event.target.elements.oo.value = "";
        renderOptionsApp();
    }
};

const removeAll = () => {
    appObject.options = [];
    renderOptionsApp();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNumber];
    alert(option);
};
const appRoot = document.getElementById('root');
counter = 0;
const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subTitle && <p>{appObject.subTitle}</p>}
            <p>{appObject.options.length > 0 ? "Here are some options" : "There is no options"}</p>
            <p>{appObject.options.length}</p>
            <p>
                {numbers.map((value) => {
                    return <p key={value}>number: {value}</p>
                })}
            </p>
            <ol>
                {appObject.options.map((vlaue) => {
                    counter++;
                    return <li key={counter}>{vlaue}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="oo" />
                <button>add option</button>
            </form>
            <button onClick={onMakeDecision} 
            disabled={appObject.options.length == 0}>
                What should I do?</button>
            <button onClick={removeAll}>remove All</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderOptionsApp();


// const userInfo = {
    //     name: "Saba",
    //     age: 19,
    //     location: "Tehran"
    // };

    // function getLocation(location) {
    //     if (location) {
    //         return <p>Location: {location}</p>;
    //     }
    // }

    // const template2 = (
    //     <div>
    //         <h1>{userInfo.name ? userInfo.name : "Ananymous"}</h1>
    //         {(userInfo.age && userInfo.age >= 18) && <p>Age: {userInfo.age}</p>}
    //         {getLocation(userInfo.location)}
    //     </div>
    // );