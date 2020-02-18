import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent} from '../layouts/default/default.component';
import { DashboradComponent} from '../modules/dashborad/dashborad.component'

import {Routes  ,RouterModule} from '@angular/router';
import { PostComponent } from '../modules/post/post.component';
const routes : Routes = [
  { path:'' , component:DefaultComponent , 
  children:[

    {path:'' , component:DashboradComponent},
    {path:'posts' , component:PostComponent}

  ]} , 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule , 
    RouterModule.forRoot(routes)
  
  ] ,
  exports:[RouterModule]
})
export class RoutingModule { }
