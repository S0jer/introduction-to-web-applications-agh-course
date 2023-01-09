import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTravelDetailsComponent } from './single-travel-details.component';

describe('SingleTravelDetailsComponent', () => {
  let component: SingleTravelDetailsComponent;
  let fixture: ComponentFixture<SingleTravelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTravelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTravelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
