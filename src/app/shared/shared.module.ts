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
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@NgModule({
  declarations: [  SidebarComponent ,
    FooterComponent ,
    HeaderComponent,
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule  ,
    MatMenuModule,
    MatCardModule,
    DragDropModule,
    MatDialogModule

  ] , 
  entryComponents: [
    DialogContentComponent
  ],
  exports:[
    SidebarComponent ,
    FooterComponent ,
    HeaderComponent
  ]
})
export class SharedModule { }
