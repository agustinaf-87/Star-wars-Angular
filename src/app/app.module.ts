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
import { UiFooterModule } from 'ngx-ui-footer-af';
import { ButtonGoBackComponent } from './shared/button-go-back/button-go-back.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NavBarAnimationComponent } from './features/components/nav-bar-animation/nav-bar-animation.component';
import { HomeComponent } from './features/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BreadcrumbComponent,
    SmugglerComponent,
    SpacecraftDetailComponent,
    PlanetDetailComponent,
    SmugglerCardComponent,
    ButtonGoBackComponent,
    NotFoundComponent,
    NavBarAnimationComponent,
    HomeComponent
   
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
    UiFooterModule,

  ],
  providers: [NavigationService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
