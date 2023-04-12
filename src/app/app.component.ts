import { Component } from '@angular/core';
import { NavigationService } from './features/services/navigation-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1exam-vueling-2023';
  constructor(public navigation: NavigationService, private spinner: NgxSpinnerService){
    {
      this.navigation.startSaveHistory();
    }
  }

}
