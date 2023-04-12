import { Component } from '@angular/core';
import { ISmuggler } from '../../interfaces/ISmuggler';
import { ActivatedRoute, Router } from '@angular/router';
import { SmugglerService } from '../../services/smuggler.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {
 planetDetail: ISmuggler = {} as ISmuggler;

  constructor(
    private route: ActivatedRoute,
    private smugglerService: SmugglerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSmuggler();
  }

  public getSmuggler(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(id);
    this.smugglerService
      .getSmugglersById(id)
      .subscribe((planetDetail) => (this.planetDetail = planetDetail));
  }

}
