import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';

import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    RegisterService
  ]
})
export class AuthModule { }
