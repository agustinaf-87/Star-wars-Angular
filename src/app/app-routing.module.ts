import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { SmugglerComponent } from './features/pages/smuggler/smuggler.component';
import { SpacecraftDetailComponent } from './features/pages/spacecraft-detail/spacecraft-detail.component';
import { PlanetDetailComponent } from './features/pages/planet-detail/planet-detail.component';
// import { PlanetDetailComponent } from './features/pages/planet-detail/planet-detail.component';

const routes: Routes = [

  {
    path: "",
    // data: { breadcrumb: null },
    children: [
      {
        path: "",
        data: { breadcrumb: "home"},
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
  // {
  //     path: '**',
  //     data: { breadcrumb: 'error' },
  //     component: NotFoundComponent,
  //   },
  
  //   path: "home",
  //   data: { breadcrumb: "home" },
  //   children: [
  //     {
  //       path: "",
  //       data: {
  //         breadcrumb: null,
  //       },
  //       component: HomeComponent,
  //     },
  //     {
  //       path: "smugglers",
  //       data: { breadcrumb: "smugglers"},
  //       children: [
  //         {
  //           path: "",
  //           data: { breadcrumb: null },
  //           component: SmugglerComponent,
  //         },
  //         {
  //           path: "spacecraft/:id",
  //           data: { breadcrumb: "{{id}}" },
  //           children: [
  //             {
  //               path: "",
  //               data: { breadcrumb: null },
  //               component: SpacecraftDetailComponent,
  //             },
  //             {
  //               path: "planet",
  //               component: PlanetDetailComponent,
  //               data: { breadcrumb: "planet" },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // { path: "", redirectTo: "home", pathMatch: "full" }, // redirect to `first-component`
  // // { path: "**", component: NotFoundComponent }, // Wildcard route for a 404 page
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
