export interface IPost {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}
export interface IPhotos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}