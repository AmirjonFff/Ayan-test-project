import { IPhotos, IPost } from "../type";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (q: string): Promise<any[]> => {
    try {
        const [postsResponse, photosResponse] = await Promise.all([
            fetch(`${BASE_URL}/posts?title_like=${q}`),
            fetch(`${BASE_URL}/photos`)
        ]);

        if (!postsResponse.ok) {
            throw new Error(`Ошибка при запросе постов: ${postsResponse.status} ${postsResponse.statusText}`);
        }

        if (!photosResponse.ok) {
            throw new Error(`Ошибка при запросе фотографий: ${photosResponse.status} ${photosResponse.statusText}`);
        }

        const posts = await postsResponse.json();
        const photos = await photosResponse.json();

        const postsWithImages = posts.map((post: IPost) => {
            const photo = photos.find((photo: IPhotos) => photo.id === post.id);
            return {
                ...post,
                imageUrl: photo?.url || ""
            };
        });

        return await postsWithImages;
    } catch (error) {
        console.error("Ошибка при запросе постов:", error);
        throw error;
    }
};