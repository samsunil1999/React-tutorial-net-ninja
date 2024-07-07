import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);
    // useHistory is used to create the history object which will have the list of all the routes visited 
    // this also helps to programatically redirect from one route to another....
    const history = useHistory(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('New blog added');
                
                // history.go() method is used
                // history.go(-1);

                history.push('/'); // redirecting to the home route path on successful completion of the fetch API call.
            })
            
            setIsPending(false);
        },1000)
    }


    return (
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label>Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                ></textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled>Loading...</button>} 
            </form>
        </div>
    );
}

export default Create;