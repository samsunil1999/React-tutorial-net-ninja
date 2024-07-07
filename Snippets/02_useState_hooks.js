/*
useState Hooks:
These are used to store state of any variable which could be used ot rerender the webpages 

These are simple variables which can be used in the web pags and can be changes on some event changes.
The values of the variable are changed using the setFunction
To do this we need to import the useState library from react
*/
import { useState } from "react";

const Home = () => {

const [name, setName] = useState('Sam');
const [age, setAge] = useState(24);

    const handleClick = () => {
        if (name === "Sam" && age === 24) {
            setName('mario')
            setAge(20)
        } else {
            setName('Sam')
            setAge(24)
        }
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Here!</button>
        </div>
     );
}
 
export default Home;
