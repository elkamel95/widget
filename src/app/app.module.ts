import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RoutingModule} from './routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';
import { ApiService } from './service/api.service';
import {HttpClientModule} from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule , 
    SharedModule,
    DefaultModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
