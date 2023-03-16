import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/* Imports de interfaces */
import { Task } from '@core/models/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public AUTH_SERVER:string = "http://localhost:3000/tasks";
  public idUser:string = "";
  public header = new HttpHeaders();

  constructor(
    private httpClient:HttpClient
  ) { }

  registerTask(objTask:Task, token:string): Observable<any>{

      this.header = this.header
      .set('Authorization', token)
      .set('content-type','application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<any>(this.AUTH_SERVER+"/new-task", objTask, {headers:this.header})
    .pipe(tap(
      (res) => {
        console.log(res);
        if(res){
          //guardar token
          this.saveToken(res.token);
        }
      })
    );
  }

  viewTasks(idUser:string, token:string): Observable<any>{

    this.header = this.header
    .set('Authorization', token)
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.get<any>(this.AUTH_SERVER+"/view-tasks?idUser="+idUser, {headers:this.header})
    .pipe(tap(
      (res) => {
        console.log(res);
        if(res){
          //guardar token
          this.saveToken(res.token);
        }
      })
    );
  }

  editTask(token:string, objTask:Task): Observable<any>{
    
    this.header = this.header
    .set('Authorization', token)
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<any>(this.AUTH_SERVER+"/edit-task", objTask, {headers:this.header})
    .pipe(tap(
      (res) => {
        console.log(res);
        if(res){
          //guardar token
          this.saveToken(res.token);
        }
      })
    );    

  }

  private saveToken(token:string){
    localStorage.setItem("ACCESS_TOKEN", token);
  }

  public getToken():string{    
    return localStorage.getItem("ACCESS_TOKEN") || "";
  }

}
