import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnJsonArrayService } from '../return-json-array.service';
import { MenuOption } from '../MenuOption.class';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
  providers: [ReturnJsonArrayService]
})
export class LoadComponent implements OnInit {

  menu: Observable<Array<MenuOption>>;

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ReturnJsonArrayService) {
    this.loadFile();
    console.log("AppComponent.data:" + this.menu);
    debugger;
  }

  ngOnInit() {

  }

  loadFile() {
    this.menu = this.service.getMenu('../assets/data/configurable-menu.json');
  }

  onChange(event) {
    console.log('event:' + event);
    var file: File = event.srcElement.files[0];
    var url;
    console.log('file:' + file);
    console.log('file.name:' + file.name);
    console.log('file.type:' + file.type);
    if(file != null) {
      url = URL.createObjectURL(file);
    } else {
      url = './assets/data/tree.json';
    }
    console.log('url:' + url);
    if(url != null) {
      this.menu = this.service.getMenu(url);
    }
    console.log('enviem');
    this.notify.emit(this.menu);
    console.log('fi onChange');
  }

}
