import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TaskService } from '@modules/tasks/services/task.service';  
import { StepService } from '@modules/steps/services/step.service';
import { LoginService } from '@modules/auth/services/login/login.service';

/* Import de interfaz de task */
import { Step } from '@core/models/interfaces/step';
import { Task } from '@core/models/interfaces/task';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.css']
})
export class CreateStepComponent implements OnInit, AfterViewInit{

  public flagLoadTasks:boolean = false;
  public flagLoadTasksById:boolean = false;

  public descriptionStep:string = "";
  public titleStep:string = "";
  public doneStep:boolean = false;

  public selectedTaskId!:string;
  private idUser!:string;
  private token!:string;

  public objStep!:Step;
  public objTask!:Task;
  public arrayTasks:any = [];

  constructor(
    private taskService:TaskService,
    private loginService:LoginService,
    private stepService:StepService,
    private snackBar: MatSnackBar
  ){ }

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

  fillArrayTasks(dataRes:any){
    dataRes.forEach((element: any) => {
      this.arrayTasks.push({
        id: element._id,
        idUser: element.id_user,
        title: element.title,
        description: element.description,
        done: element.done,        
        createdAt: element.createdAt,
        updatedAt: element.updatedAt
      });
    });
  }

  loadTaskById(){
    this.arrayTasks.forEach((element: any) => {
      if(element.id === this.selectedTaskId){
        this.objTask = element
        this.flagLoadTasksById = true;
        return;
      }      
    });
  }

  onSubmitCreateStep(){

    this.token = this.loginService.getToken();
    this.objStep = {
      idTask : this.selectedTaskId,
      title : this.titleStep,
      description : this.descriptionStep,
      done : this.doneStep,
      createdAt: this.getDate()
    }
    this.stepService.registerStep(this.objStep, this.token).subscribe(res =>{
      this.snackBar.open("¡Step registrado exitosamente!", "OK");
      return;
    });
    this.snackBar.open("Se presento un error en el registro", "OK");
  }

  private getDate():string{
    let date: Date = new Date();
    return date.toDateString();
  }

}
