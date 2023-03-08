import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./home/dashboard/dashboard.component";
import { AuthComponent } from './modules/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,NgbModule,RouterModule,AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
