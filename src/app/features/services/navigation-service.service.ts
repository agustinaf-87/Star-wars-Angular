import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable()
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.history.push(e.urlAfterRedirects);
      }
    });
  }

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public goBack(): void {
    this.history.pop();

    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2];
    }
    return "";
  }
}
