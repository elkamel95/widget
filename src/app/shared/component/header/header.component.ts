import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
sidbarhidden=false;
@Output() 
MenuHidden: EventEmitter<any> = new  EventEmitter();
@Output() 
configHiddenEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}



  toggleSideBar(){
this.MenuHidden.emit();
  }
  configHidden(){
this.configHiddenEmit.emit();
  }


}
