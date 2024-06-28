import { useState } from "react";

const Home = () => {

    const handleClick = (evt) => {
        console.log("You just clicked the button", evt);
    }

    const handleClickAgain = (name, evt) => {
        console.log(`Hello ${name}`);
        console.log("event: ", evt);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Here!</button>

            {/* You can't have the paranthesis with the function name as it will invoke the function
                Then what will we do if you want to pass an argument with the function?
                => we have to use the anonymous function if we want to pass the argument
            */}
            <button onClick={(evt) => handleClickAgain('Sam', evt)}>Click Me 2</button>
        </div>
     );
}
 
export default Home;
