import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/* Imports de interfaces */
import { User } from '@core/models/interfaces/user';
//import { JwtResponse } from '@core/models/interfaces/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public AUTH_SERVER:string = "http://localhost:3000/api";
  public token:string = "";
  public idUser:string = "";

  constructor(
    private httpClient:HttpClient
  ) { } 

  loginUser(user: User): Observable<any>{
    return this.httpClient.post<any>(
      this.AUTH_SERVER+"/login", user
    ).pipe(tap(
        (res) => {
          console.log(res);
          if(res){
            //guardar token
            this.saveDataLogin(res.token, res.id_user);
          }
        })
      );
  }
  
  logOut(){
    this.token = "";
    this.idUser = "";
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("ID_USER");   
  }

  private saveDataLogin(token:string, idUser:string){
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("ID_USER", idUser);
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN") || "";    
    }
    return this.token;
  }

  private getIdUser():string{
    if(!this.idUser){
      this.idUser = localStorage.getItem("ID_USER") || "";    
    }
    return this.idUser;
  }

}
