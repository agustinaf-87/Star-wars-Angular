/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smuggler-card',
  templateUrl: './smuggler-card.component.html',
  styleUrls: ['./smuggler-card.component.scss']
})
export class SmugglerCardComponent {
  @Input() smugglers: any;

}
