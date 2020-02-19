import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/app/bean/widget';
import { ApiService } from './../../service/api.service';
import { dispositions } from 'src/app/bean/dispositions';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidbarhidden =false;
 sidbarconfigHidden = false ; 
widgetArray:Widget[] = [];
widget:Widget;
index = 0;
currentPosition = 0;
positionWidget :dispositions ;
ngOnInit() {
 this.widget = new Widget();
  this.widgetArray.push(this.widget);

  this.api.refreshneeded.subscribe(()=>{
    this.api.getWidget().subscribe(data=>{
      this. widgetArray = data ;
     });

  });

  this.api.getWidget().subscribe(data=>{
    this. widgetArray = data ;
    this.currentPosition=data[0].orderWidget;
    console.log(this.currentPosition);
   });
}
  constructor(private api:ApiService ) { 
    this.api.getWidget().subscribe(data=>{
      this. widgetArray = data ;
     });
//     for (var _i = 0; _i < 3; _i++) {
//     this.widget =  new Widget();
//     this.widget.titre="widget 1 "+ _i;
// this.widget.color="#fff";
// this.widget.background="#1456"

// this.widgetArray.push(this.widget)

//   }
  }

  MenuHidden(){
    this.sidbarhidden =!this.sidbarhidden ;
  }
  configHidden(){
    this.sidbarconfigHidden =!this.sidbarconfigHidden ;  }

  getIndexWidget($event){
 this.index = $event ;
  }
  setPositionWidget($event){
    this.positionWidget = $event ;

     }
SaveConfig(){
  console.log( "xxx"+this.positionWidget.marginbottom);
  console.log( "xxx"+this.positionWidget.marginleft);

  this.widgetArray[this.index].marginleft=this.positionWidget.marginbottom;
  this.widgetArray[this.index].marginbottom=this.positionWidget.marginleft;
  this.api.SaveWidget( this. widgetArray[this.index])

}
}
