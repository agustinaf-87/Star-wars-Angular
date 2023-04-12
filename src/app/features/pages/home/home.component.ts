import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public navigation: NavigationService ) {}
}
