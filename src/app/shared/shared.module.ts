import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@shared/modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotAvailableComponent } from './components/not-available/not-available.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NotAvailableComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NotAvailableComponent,
    MenuBarComponent
  ]
})
export class SharedModule { }
