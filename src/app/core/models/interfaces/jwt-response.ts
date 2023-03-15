export interface JwtResponse {
    dataUser:{
        id: number,
        name: string,
        email: string,
        access_token: string,
        expire: string
    }
}
