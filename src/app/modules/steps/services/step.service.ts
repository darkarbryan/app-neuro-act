import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/* Imports de interfaces */
import { Step } from '@core/models/interfaces/step';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  public AUTH_SERVER: string = "http://localhost:3000/steps";
  public idUser: string = "";
  public header = new HttpHeaders();

  constructor(
    private httpClient: HttpClient
  ) { }

  registerStep(objStep: Step, token: string): Observable<any> {

    this.header = this.header
      .set('Authorization', token)
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<any>(this.AUTH_SERVER + "/new-step", objStep, { headers: this.header })
      .pipe(tap(
        (res) => {
          console.log(res);
          if (res) {
            //guardar token
            this.saveToken(res.token);
          }
        })
      );
  }

  viewSteps(idTask: string, token: string): Observable<any> {

    this.header = this.header
      .set('Authorization', token)
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.get<any>(this.AUTH_SERVER + "/view-steps?idTask=" + idTask, { headers: this.header })
      .pipe(tap(
        (res) => {
          console.log(res);
          if (res) {
            //guardar token
            this.saveToken(res.token);
          }
        })
      );
  }

  editStep(token: string, objStep: Step): Observable<any> {

    this.header = this.header
      .set('Authorization', token)
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<any>(this.AUTH_SERVER + "/edit-step", objStep, { headers: this.header })
      .pipe(tap(
        (res) => {
          console.log(res);
          if (res) {
            //guardar token
            this.saveToken(res.token);
          }
        })
      );

  }

  private saveToken(token: string) {
    localStorage.setItem("ACCESS_TOKEN", token);
  }

  public getToken(): string {
    return localStorage.getItem("ACCESS_TOKEN") || "";
  }

}
