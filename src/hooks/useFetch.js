import { useState, useEffect } from 'react';

function useFetch(parFetch) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController)
    setLoading(true);

    fetch(parFetch, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => controller ? setErrorFetch("Request Cancel") : setErrorFetch(error))
      .finally(setLoading(false))
  }, []);

  // function makefFetch(parFetch) {
  //   const abortController = new AbortController();
  //   setController(abortController)
  //   setLoading(true);
  //   console.log("entro aqui")

  //   fetch(parFetch, { signal: abortController.signal })
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => controller ? setErrorFetch("Request Cancel") : setErrorFetch(error))
  //     .finally(setLoading(false))
  // }

  const handleCancelController = () => {
    if (controller) {
      controller.abort();
      setErrorFetch("Request Cancel")
    }
  }


  return { data, loading, errorFetch, handleCancelController }
}

export default useFetch;