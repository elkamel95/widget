import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Widget} from './../../../bean/widget';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { DialogContentComponent } from 'src/app/dialog-content/dialog-content.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input() widget: Widget [] =[] ; 
@Output()
  indexWidget: EventEmitter<any> = new EventEmitter();
  @Input()
  OpenPops=true;
  index = 0;
  positionX= 0;
  positionY=0;
  constructor(public dialog:MatDialog ) { 
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


emitChange(index){
  this.indexWidget.emit(index);
  if(this.OpenPops)
this.openDialog();
}
dragEnded($event: CdkDragEnd) {
  const { offsetLeft, offsetTop } = $event.source.element.nativeElement;
  const { x, y } = $event.distance;
  this.positionX = offsetLeft + x;
  this.positionY = offsetTop + y;
  console.log("x"+this.positionX);
  console.log("y"+this.positionY);

}
  ngOnInit() {
  }

}
