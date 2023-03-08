import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    NgbModule,
  ]
})
export class HomeModule { }
