import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/auth/services/login/login.service';

/* Import de interfaz */
import { User } from '@core/models/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginFormGrp!: FormGroup;

  /* Variables para obtener valores de campos */  
  public userName:string = "";
  public userPassword:string = ""; 

  private objUser!:User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
  }

  /*
    inicializar componentes de formulario antes de renderizar la pagina
    dee sta forma se cargan los estilos correctamente
  */
  initLoginForm(){
    this.loginFormGrp = this.formBuilder.group({      
      usuario: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmitLogin(){  
      
    this.objUser = {
      email: this.userName,
      password: this.userPassword
    }
    
    this.loginService.loginUser(this.objUser).subscribe(res =>{
      this.router.navigateByUrl('/home/home');
    });
    
  }

}
