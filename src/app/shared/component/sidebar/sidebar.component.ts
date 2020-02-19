import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Widget} from './../../../bean/widget';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { DialogContentComponent } from 'src/app/dialog-content/dialog-content.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dispositions } from 'src/app/bean/dispositions';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input() widget: Widget [] =[] ; 
@Input()
currentPosition =0 ;
@Output()
dispositions : EventEmitter<dispositions> = new EventEmitter();
@Output()
  indexWidget: EventEmitter<any> = new EventEmitter();
  @Input()
  OpenPops=true;
  currentOrder=0;
  OldOrder=0;
  index = 0;
  positionX= 0;
  positionY=0;
  constructor(public dialog:MatDialog ) { 
  console.log(this.currentPosition);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


emitChange(index,order){
  this.indexWidget.emit(index);
  console.log(order);
  //this.ChangeOrder(index,order)
  if(this.OpenPops)
this.openDialog();
}
dragEnded(index ,$event: CdkDragEnd) {

var positionWidget:dispositions = new dispositions();
  var style = window.getComputedStyle($event.source.element.nativeElement);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  positionWidget.marginbottom= matrix.m41+'px';
  positionWidget.marginleft=matrix.m42+'px';
  this.dispositions.emit(positionWidget);

}
ChangeOrder(index,Order) {
  this.OldOrder=this.currentOrder ;

    this. currentOrder=index;
    if(  this.OldOrder!=this.currentOrder 
      )
  { this.widget[  this. currentOrder].orderWidget =  this.widget[  this.OldOrder].orderWidget
    this.widget[  this.OldOrder].orderWidget =   this.widget[  this. currentOrder].orderWidget
    console.log("currentOrder:"+  this.widget[  this. currentOrder].orderWidget );}
console.log("OldOrder:"+   this.widget[  this.OldOrder].orderWidget);



}
  ngOnInit() {

  }

}
