import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    httpClient:HttpClient
  ) { }

  verifySesion():boolean{     
    if(localStorage.getItem("ACCESS_TOKEN") != undefined){
      return true;
    }
    return false;
  }    

}
