import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
       //second param associates abort controller to fetch function
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if(!res.ok){
            throw Error("Could not fetch the data for that resource");
          } else {
            return res.json();
          }
        })
        .then(data => {
          console.log(data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          if(err.name === 'AbortError'){
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        })
      }, 1000);

      //aborts whatever fetch it's associated with so that state isn't trying to be updated on an unmounted compontent
      return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;