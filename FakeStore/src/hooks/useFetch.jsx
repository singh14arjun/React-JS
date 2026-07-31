import { useState, useEffect, useCallback } from 'react';

/**
 * A custom Reusable hook for data fetching
 * Handlers real-time async status like loading, errors, and fetched data.
 * @param {Function} fetchFunction The service function to call (e.g., productService.getAllProducts)
 * @param {Array} args Arguments to pass to the fetch function
 */
const useFetch = (fetchFunction, args = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(async (...overrideArgs) => {
        setLoading(true);
        setError(null);
        try {
            const resData = await fetchFunction(...(overrideArgs.length ? overrideArgs : args));
            setData(resData);
            return resData;
        } catch (err) {
            setError(err?.response?.data?.message || err.message || 'An unexpected error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    }, [fetchFunction, args]);

    return { data, loading, error, execute };
};

export default useFetch;
