import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyRoutingModule } from './router';
import {FormsModule} from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { HttpModule } from '@angular/http';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserServiceService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
