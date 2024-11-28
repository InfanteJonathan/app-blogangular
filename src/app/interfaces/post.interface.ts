export interface PostInterface{
    idPosts: number;
    title: string;
    userId?: number;
    content: string;
    imageUrl?: string;
    fechaRegistro? : Date;
    fechaEdicion? : Date;
}