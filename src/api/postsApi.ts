const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (): Promise<any[]> => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при запросе постов:", error);
        throw error; // Передаём ошибку дальше для обработки
    }
};