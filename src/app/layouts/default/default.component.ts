import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/app/bean/widget';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidbarhidden =false;
  sidbarconfigHidden = false ; 
widgetArray:Widget[]=[];
widget:Widget ;
index = 1;
name="ff";
color ="#ffff";
  constructor() { 

    for (var _i = 0; _i < 3; _i++) {
    this.widget =  new Widget();
    this.widget.titre="widget 1 "+ _i;
this.widget.color="#fff";
this.widget.background="#1456"

this.widgetArray.push(this.widget)

  }


console.log(this.widgetArray);
  }

  MenuHidden(){
    this.sidbarhidden =!this.sidbarhidden ;
  }
  configHidden(){
    this.sidbarconfigHidden =!this.sidbarconfigHidden ;  }
  ngOnInit() {
  }
  getIndexWidget($event){
 this.index = $event ;
  }

}
