import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { NavigationService } from './features/services/navigation-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SmugglerComponent } from './features/pages/smuggler/smuggler.component';
import { SpacecraftDetailComponent } from './features/pages/spacecraft-detail/spacecraft-detail.component';
import { PlanetDetailComponent } from './features/pages/planet-detail/planet-detail.component';
import { SmugglerCardComponent } from './features/components/smuggler-card/smuggler-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BreadcrumbComponent,
    SmugglerComponent,
    SpacecraftDetailComponent,
    PlanetDetailComponent,
    SmugglerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
