import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent} from './../../modules/post/post.component'
import { DashboradComponent} from './../../modules/dashborad/dashborad.component'
import { DefaultComponent} from './default.component'
import { RoutingModule } from 'src/app/routing/routing.module';
import {SharedModule} from './../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: 
  [  DashboradComponent ,
     PostComponent ,
     DefaultComponent
    ],
  imports:
   [
    CommonModule ,
    RoutingModule, 
    SharedModule, 
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule  ,
    MatInputModule ,
    MatCardModule,
    FormsModule,
    MatButtonModule

  ],
  exports:[DashboradComponent ,
  PostComponent ,DefaultComponent]

})
export class DefaultModule { }
