import { Component } from '@angular/core';
import { SmugglerService } from '../../services/smuggler.service';
import { ISmuggler } from '../../interfaces/ISmuggler';

@Component({
  selector: 'app-smuggler',
  templateUrl: './smuggler.component.html',
  styleUrls: ['./smuggler.component.scss']
})
export class SmugglerComponent {
  smugglers: ISmuggler[] = this.smugglerService.getAllSmugglers();

  constructor(private smugglerService: SmugglerService) {}
}
