import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacecraftDetailComponent } from './spacecraft-detail.component';

describe('SpacecraftDetailComponent', () => {
  let component: SpacecraftDetailComponent;
  let fixture: ComponentFixture<SpacecraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacecraftDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacecraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
