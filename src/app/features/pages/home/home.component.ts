import { Component } from '@angular/core';
import { SmugglerService } from '../../services/smuggler.service';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private smugglerService: SmugglerService, public navigation: NavigationService ) {}
}
