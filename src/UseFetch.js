import { useState, useEffect } from "react";
// Making custom Hook called useFetch.
// custom hook in react should start with use... keyword.

// This custom hook it made to call any fetch API and get the data, error (if any) & isPending
// As this functionality could be used in multiple places.

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { 
                        throw Error('Could not fetch the data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data); 
                    setIsPending(false);
                    setError(null); 
                })
                .catch(err => {
                    if (err.name === 'TypeError') {
                        setError('Failed to fetch. Please check your network connection or the server status.');
                    } else {
                        setError(err.message);
                    }
                    setIsPending(false);
                });
        }, 1000);
    },[ url ]) // here we are adding the url as the dependency bcz we need to execute this useEffect whenever the url is changed

    // As generally a hook would return the data array as the result but here in the useFetch function we are return all the states i.e. the data, error & isPending
    return { data, isPending, error };
}

export default useFetch;