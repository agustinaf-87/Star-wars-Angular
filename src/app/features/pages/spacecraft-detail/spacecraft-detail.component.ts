import { Component } from '@angular/core';
import { ISmuggler } from '../../interfaces/ISmuggler';
import { ActivatedRoute, Router } from '@angular/router';
import { SmugglerService } from '../../services/smuggler.service';

@Component({
  selector: 'app-spacecraft-detail',
  templateUrl: './spacecraft-detail.component.html',
  styleUrls: ['./spacecraft-detail.component.scss']
})
export class SpacecraftDetailComponent {
  spacecraftFeatures: ISmuggler = {} as ISmuggler;

  constructor(
    private route: ActivatedRoute,
    private smugglerService: SmugglerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSpaceCraft();
  }

  public getSpaceCraft(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(id);
    this.smugglerService
      .getSmugglersById(id)
      .subscribe((spacecraftFeatures) => (this.spacecraftFeatures = spacecraftFeatures));
  }
}
