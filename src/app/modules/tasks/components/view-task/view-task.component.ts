import { AfterViewInit, Component, OnInit } from '@angular/core';

import { TaskService } from '@modules/tasks/services/task.service';  
import { LoginService } from '@modules/auth/services/login/login.service';

/* Import de interfaz de task */
import { Task } from '@core/models/interfaces/task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit, AfterViewInit{

  private idUser!:string;
  private token!:string;

  public flagLoadTasks:boolean = false;  
  public arrayTasks:any = [];

  constructor(
    private taskService:TaskService,
    private loginService:LoginService,
    private snackBar: MatSnackBar
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

}
