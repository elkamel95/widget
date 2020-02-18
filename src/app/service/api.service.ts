import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Widget } from '../bean/widget';
import { Subject, Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://localhost:8000/api/styles_widgets";
  refreshneeded = new Subject<void>();

  constructor(private htpp:HttpClient) { }

SaveWidget(widget:Widget){
  console.log(this.url+"/"+widget.id);
this.htpp.put<any>(this.url+"/"+widget.id,widget).pipe(
  tap(()=>{this.refreshneeded.next ();
  })).subscribe();

}

getWidget():Observable<Widget[]>{
 return this.htpp.get<Widget[]>(this.url).pipe(map(data => data['hydra:member']));
  
}

}
