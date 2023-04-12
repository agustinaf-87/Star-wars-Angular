import { Component } from '@angular/core';
import { SmugglerService } from '../../services/smuggler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private smugglerService: SmugglerService) {}
}
