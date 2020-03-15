import { Component, OnInit, HostListener } from '@angular/core';
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
  innerWidth:any ;
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
      console.log(this.propName(this. widgetArray[1],
        this. widgetArray[0].background) );

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
 console.log(this.propName(this. widgetArray[this.index],
  this. widgetArray[ this.index ]['marginleft']) );
  }
  setPositionWidget($event){
    this.positionWidget = $event ;

     }
SaveConfig(){
 this.widgetArray[this.index].marginleft=this.positionWidget.marginbottom;
  this.widgetArray[this.index].marginbottom=this.positionWidget.marginleft;
  this.api.SaveWidget( this. widgetArray[this.index])

}

propName(prop, value){
  for(var i in prop) {
    console.log(i );
      if (prop[i] == value){
           return i;
      }
  }
  return false;
}

}
