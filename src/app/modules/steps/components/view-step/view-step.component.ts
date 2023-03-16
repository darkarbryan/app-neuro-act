import { AfterViewInit, Component, OnInit } from '@angular/core';

import { TaskService } from '@modules/tasks/services/task.service';  
import { LoginService } from '@modules/auth/services/login/login.service';
import { StepService } from '@modules/steps/services/step.service';

/* Import de interfazs */
import { Task } from '@core/models/interfaces/task';
import { Step } from '@core/models/interfaces/step';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-step',
  templateUrl: './view-step.component.html',
  styleUrls: ['./view-step.component.css']
})
export class ViewStepComponent implements OnInit, AfterViewInit{

  private idUser!:string;
  private idTask!:string;
  private token!:string;

  public selectedTaskId:string = "";

  public flagLoadTasks:boolean = false;  
  public flagLoadSteps:boolean = false;

  public arrayTasks:any = [];
  public arraySteps:any = [];

  constructor(
    private taskService:TaskService,
    private loginService:LoginService,
    private snackBar: MatSnackBar,
    private stepService:StepService
  ) {}

  ngOnInit(): void {    
  }

  ngAfterViewInit(): void {
    this.getUserTasks();    
  }

  getUserTasks(){
    this.idUser = this.loginService.getIdUser();
    this.token = this.loginService.getToken();
    this.taskService.viewTasks(this.idUser, this.token).subscribe(res => {
      if(res.length>0){
        this.fillArrayTasks(res);
        this.snackBar.open("¡Tasks encontrados!", "OK");        
        //para ocultar el mensaje de que no se encontro y renderizar las cards de cada task encontrada        
        this.flagLoadTasks = true; 
      }else{
        this.snackBar.open("No se han encontrado registros.", "OK");
      }  
    });
  }

  getStepsByTaskId(){
    
    this.idTask = this.selectedTaskId;
    this.token = this.loginService.getToken();
    console.log(this.idTask);
    this.stepService.viewSteps(this.idTask, this.token).subscribe( res => {
      if(res.length>0){
        this.fillArraySteps(res);
        this.snackBar.open("¡Steps encontrados!", "OK");        
        //para ocultar el mensaje de que no se encontro y renderizar las cards de cada task encontrada        
        this.flagLoadSteps = true; 
      }else{
        this.snackBar.open("No se han encontrado registros.", "OK");
      }
    });
    
  }

  fillArrayTasks(dataRes:any){
    dataRes.forEach((element: any) => {
      this.arrayTasks.push({
        _id: element._id,
        title: element.title,
        description: element.description,
        done: element.done,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt
      });
    });
  }

  fillArraySteps(dataRes:any){
    dataRes.forEach((element: any) => {
      this.arraySteps.push({
        _id: element._id,
        idTask : element.id_task,
        title: element.title,
        description: element.description,
        done: element.done,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt
      });
    });
  }


}
