import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '@modules/auth/services/register/register.service';

/* Import de interfaz */
import { User } from '@core/models/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerFormGrp!: FormGroup;
  public dataUser: any; //datos de usuario obtenidos del localstorage (JSON).

  /* Variables para obtener valores de campos */
  public name!:string;
  public userName!:string;
  public userPassword!:string; 

  private objUser!:User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.initRegisterUserForm();
  }

  ngOnInit(): void {
  }

  /*
    inicializar componentes de formulario antes de renderizar la pagina
    de esta forma se cargan los estilos correctamente
  */
  initRegisterUserForm(){
    this.registerFormGrp = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    });
  }

  onSubmitRegisterUser(){    
    this.objUser = {
      name : this.name,
      email : this.userName,
      password : this.userPassword
    }
    this.registerService.registerUser(this.objUser).subscribe(res => {
      this.router.navigateByUrl('home');
    });
  }

}
