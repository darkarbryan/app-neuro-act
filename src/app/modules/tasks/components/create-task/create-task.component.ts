import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService } from '@modules/tasks/services/task.service';
import { LoginService } from '@modules/auth/services/login/login.service';

/* Import de interfaz */
import { Task } from '@core/models/interfaces/task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{

  public createFormGrp!: FormGroup;

  /* Variables para obtener valores de campos */  
  public titleTask:string = "";
  public descriptionTask:string = ""; 
  public doneTask:boolean = false;

  private token!:string;
  private objTask!:Task;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService:TaskService,
    private loginService:LoginService,
    private snackBar: MatSnackBar
  ) {  
    this.initCreateForm();  
  }

  ngOnInit(): void {
  }

  /*
    inicializar componentes de formulario antes de renderizar la pagina
    dee sta forma se cargan los estilos correctamente
  */
    initCreateForm(){
      this.createFormGrp = this.formBuilder.group({      
        titulo: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        terminado: new FormControl('', [Validators.required])
      });
    }

  onSubmitCreateTask(){
    this.token = this.loginService.getToken();
    this.objTask = {
      idUser : this.loginService.getIdUser(),
      title: this.titleTask,
      description: this.descriptionTask,
      done: this.doneTask,
      createdAt: this.getDate()
    }
    this.taskService.registerTask(this.objTask, this.token).subscribe(res =>{
      this.snackBar.open("¡Task registrado exitosamente!", "OK");
    });
  }

  private getDate():string{
    let date: Date = new Date();
    return date.toDateString();
  }

}
