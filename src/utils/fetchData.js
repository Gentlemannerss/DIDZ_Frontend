import axios from 'axios';

async function fetchData(url, setData, setIsLoading, setError, dependencies = []) {
    try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
    } catch (error) {
        setError(error.message);
    } finally {
        setIsLoading(false);
    }
}

export default fetchData;