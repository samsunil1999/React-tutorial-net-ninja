import { useState, useEffect } from "react";
/*

*/
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
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
                    if (err.name == 'AbortError') {
                        console.log('fetch aborted');
                    }else if (err.name === 'TypeError') {
                        setError('Failed to fetch. Please check your network connection or the server status.');
                    } else {
                        setError(err.message);
                    }
                    setIsPending(false);
                });
        }, 1000);
        return () => abortController.abort()
    },[ url ])

    return { data, isPending, error };
}

export default useFetch;