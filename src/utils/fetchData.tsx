
export const fetchData = async (endpoint: string) => {
    const response = await fetch(`http://localhost:8000/php/getCapsules}.php`, {
        headers: {
            Authorization: 'Bearer dummy-token'
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
