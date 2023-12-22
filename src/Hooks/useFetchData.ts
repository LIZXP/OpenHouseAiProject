import { useState, useEffect } from 'react';
import axios from 'axios';
import { Community, Home } from './types';

const useFetchData = <T extends Community | Home>(url: string): { data: T[] | null, loading: boolean, error: Error | null; } => {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;