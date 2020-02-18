import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent} from './component/footer/footer.component'
import { HeaderComponent} from './component/header/header.component'
import { SidebarComponent} from './component/sidebar/sidebar.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from  '@angular/flex-layout' ;
import { MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [  SidebarComponent ,
    FooterComponent ,
    HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule  ,
    MatMenuModule,
    MatCardModule
  ] , 
  exports:[
    SidebarComponent ,
    FooterComponent ,
    HeaderComponent
  ]
})
export class SharedModule { }
