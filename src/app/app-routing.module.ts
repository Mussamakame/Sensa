import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbodComponent } from './dashbod/dashbod/dashbod.component';
import { ActivitiesComponent } from './folder/activities/activities.component';
import { DashbordComponent } from './folder/dashbord/dashbord.component';
import { HomeComponent } from './folder/home/home.component';
import { LogoutComponent } from './folder/logout/logout.component';

const routes: Routes = [
{
  path:'',component:HomeComponent
},

{
  path:'dashbod',component:DashbodComponent,
  children:[
    {
      path:'',component:DashbordComponent
    },
    {
      path:'dashbod/dashbord',component:DashbordComponent
    },
    {
      path:'dashbod/activities',component:ActivitiesComponent
      
    },
    {
      path:'dashbod/dashbord',component:DashbordComponent
    },
    {
      path:'dashbod/',component:HomeComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
