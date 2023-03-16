import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TaskService } from '@modules/tasks/services/task.service';  
import { LoginService } from '@modules/auth/services/login/login.service';

/* Import de interfaz de task */
import { Task } from '@core/models/interfaces/task';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, AfterViewInit{

  public flagLoadTasks:boolean = false;
  public flagLoadTasksById:boolean = false;

  public selectedTaskId!:string;
  private idUser!:string;
  private token!:string;

  public objEditTask!:Task;
  public arrayTasks:any = [];

  constructor(
    private taskService:TaskService,
    private loginService:LoginService,
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
        this.objEditTask = element
        this.flagLoadTasksById = true;
        return;
      }      
    });
  }

  modifyTask(){
    this.idUser = this.loginService.getIdUser();
    this.token = this.loginService.getToken();
    this.taskService.editTask(this.token, this.objEditTask).subscribe(res => {             
    });
    this.snackBar.open("Task actualizada correctamente.", "OK");     
  }

}
