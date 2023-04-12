import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmugglerCardComponent } from './smuggler-card.component';

describe('SmugglerCardComponent', () => {
  let component: SmugglerCardComponent;
  let fixture: ComponentFixture<SmugglerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmugglerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmugglerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
