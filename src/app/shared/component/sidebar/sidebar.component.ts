import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Widget} from './../../../bean/widget';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input() widget: Widget [] =[] ; 
@Output()
  indexWidget: EventEmitter<any> = new EventEmitter();
  index = 0;

  constructor() { 
  }

emitChange(index){
  this.indexWidget.emit(index);

}

  ngOnInit() {
  }

}
