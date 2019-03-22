import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOption } from '../MenuOption.class';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {
  
  @Input() menu: Observable<Array<MenuOption>>;

  constructor() {
    console.log("AppComponent.data:" + this.menu);
  }

  ngOnInit() {
  }

}
