import { Component } from '@angular/core';
import { ReturnJsonArrayService } from './return-json-array.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bind-json-array-to-configurable-menu';

  data: Observable<Array<any>>;

  constructor(private service: ReturnJsonArrayService) {
    this.data = service.getMenu();
    console.log("AppComponent.data:" + this.data);
  }

}
