import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOption } from '../MenuOption.class';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  
  @Input() menu: Observable<Array<MenuOption>>;

  constructor() {
    debugger;
    console.log("AppComponent.data:" + this.menu);
  }

  ngOnInit() {

  }

}
