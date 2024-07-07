import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        console.log('is pending true');

        setTimeout(() => { // Here settimeout is just used to delay the fetch API call and we could see the loading message in the button
            // Fetch API called with the method, headers and body
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('New blog added');
            })
            setIsPending(false);
            console.log('is pending false');
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
                {/* A button to submit and add a blog into the data */}
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled>Loading...</button>} 
            </form>
        </div>
    );
}

export default Create;