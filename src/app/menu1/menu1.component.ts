import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOption } from '../MenuOption.class';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  
  @Input() menu: Observable<Array<MenuOption>>;

  constructor() {
    debugger;
    console.log("AppComponent.data:" + this.menu);
  }

  ngOnInit() {

  }

}
