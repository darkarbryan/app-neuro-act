export interface Task {
    id?:string,
    idUser:string,
    title:string,
    description?:string,
    done:boolean,
    createdAt?:string,
    updatedAt?:string
}
