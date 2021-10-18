import React, { useCallback, useState } from 'react'
import api from '../api';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async(options) => {
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await api(options);
      if (!response) {
        throw new Error(response);
      }
      console.log(response)
      setData(response.data)
    } catch (err) {
      setData(null);
      console.log(err.response)
      setError(err.response.data.message)
    } finally {
      setLoading(false);
      return {
        response
      }
    }
  },[])

  return {
    data,
    error,
    loading,
    request
  }
}

export default useFetch
