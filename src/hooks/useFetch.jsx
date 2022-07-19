import { useState, useEffect } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:5173/static/shoes.json')
        .then(resp => resp.json())
        .then(resp => setData(resp))
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return {data, loading};
};