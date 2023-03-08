import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Trang chủ',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {returnUrl: window.location.pathname},
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
