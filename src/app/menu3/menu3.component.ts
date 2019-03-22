import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOption } from '../MenuOption.class';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {
  
  @Input() menu: Observable<Array<MenuOption>>;

  constructor() {
    console.log("AppComponent.data:" + this.menu);
  }

  ngOnInit() {
  }

}
