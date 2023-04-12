import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavBarAnimationComponent } from "./nav-bar-animation.component";

describe("NavBarAnimationComponent", () => {
  let component: NavBarAnimationComponent;
  let fixture: ComponentFixture<NavBarAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarAnimationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
