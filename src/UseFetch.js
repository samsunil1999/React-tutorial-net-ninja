import { useState, useEffect } from "react";
/*
Abort Controller:
 an AbortController is a tool provided by the Fetch API to abort asynchronous operations like fetch requests.
 However, in React Router, an AbortController can be used to handle navigation cancellation and other async operations associated with routing.
*/
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController(); // creating the abort controller

        setTimeout(() => {
            fetch(url, { signal: abortController.signal }) // associating the abort controller with its signal
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
        // any function returned in the useEffect hook is a cleanup function 
        // this cleanup function executes everytime we exit from the component
        return () => abortController.abort() // aborting the fetch using the abort method of abortController
    },[ url ])

    return { data, isPending, error };
}

export default useFetch;