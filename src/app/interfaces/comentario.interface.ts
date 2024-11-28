export interface ComentarioInterface {
    comentaryId: number;
    userId: number;
    content: string;
    likes: number;
    fechaRegistro: Date;
    fechaEdicion: Date;
}
