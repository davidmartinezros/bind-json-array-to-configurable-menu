import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReturnJsonArrayService } from './return-json-array.service';
import { HttpClientModule }    from '@angular/common/http';
import { LoadComponent } from './load/load.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ReturnJsonArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
