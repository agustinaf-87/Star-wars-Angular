import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { SmugglerComponent } from './features/pages/smuggler/smuggler.component';
import { SpacecraftDetailComponent } from './features/pages/spacecraft-detail/spacecraft-detail.component';
import { PlanetDetailComponent } from './features/pages/planet-detail/planet-detail.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
// import { PlanetDetailComponent } from './features/pages/planet-detail/planet-detail.component';

const routes: Routes = [

  {
      path: "",
    data: { breadcrumb: "home" },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: HomeComponent,
      },
      {
        path: "smugglers",
        data: { breadcrumb: "smugglers" },
        children: [
          {
            path: "",
            data: { breadcrumb: null },
            component: SmugglerComponent,
          },
          {
            path: "spacecraft/:id",
            data: { breadcrumb: "{{id}}" },
            children:[
              {
                path: "",
                data: { breadcrumb: null },
                component: SpacecraftDetailComponent,
              },
              {
                path: "planets",
                component: PlanetDetailComponent,
                data: { breadcrumb: "planets" },
              },
            ]
          },
        ]
      },
    ]
  },
  {
      path: '**',
      data: { breadcrumb: 'error' },
      component: NotFoundComponent,
    },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
