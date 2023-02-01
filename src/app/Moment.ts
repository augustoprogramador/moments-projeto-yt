export interface Moment {
    id?: string;
    title: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    comments?: [{texto: string; username: string}];
}