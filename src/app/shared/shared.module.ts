import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotAvailableComponent } from './components/not-available/not-available.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NotAvailableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NotAvailableComponent
  ]
})
export class SharedModule { }
