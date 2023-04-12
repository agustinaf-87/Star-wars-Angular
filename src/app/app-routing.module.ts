import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { SmugglerComponent } from './features/pages/smuggler/smuggler.component';
import { SpacecraftDetailComponent } from './features/pages/spacecraft-detail/spacecraft-detail.component';
import { PlanetDetailComponent } from './features/pages/planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: "home",
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
        path: "smuglers",
        data: { breadcrumb: "smuglers" },
        children: [
          {
            path: "",
            data: { breadcrumb: null },
            component: SmugglerComponent,
          },
          {
            path: "spacecraft/:id",
            data: { breadcrumb: "{{id}}" },
            children: [
              {
                path: "",
                data: { breadcrumb: null },
                component: SpacecraftDetailComponent,
              },
              {
                path: "planet",
                component: PlanetDetailComponent,
                data: { breadcrumb: "planet" },
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "", redirectTo: "home", pathMatch: "full" }, // redirect to `first-component`
  // { path: "**", component: NotFoundComponent }, // Wildcard route for a 404 page
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
