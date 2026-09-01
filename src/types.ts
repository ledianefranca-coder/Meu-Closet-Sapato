export const CATEGORIES=['Tênis','Salto','Sandália','Bota','Sapatilha','Chinelo','Mocassim','Outro'] as const
export const STATUSES=['Disponível','Em uso','Para conserto','Para doar'] as const
export type Shoe={id:string;user_id:string;name:string;brand:string|null;category:typeof CATEGORIES[number];color:string|null;size:number|null;occasion:string|null;status:typeof STATUSES[number];favorite:boolean;image_path:string|null;notes:string|null;created_at:string;updated_at:string}
export type ShoeDraft={name:string;brand:string;category:typeof CATEGORIES[number];color:string;size:string;occasion:string;status:typeof STATUSES[number];favorite:boolean;notes:string}
