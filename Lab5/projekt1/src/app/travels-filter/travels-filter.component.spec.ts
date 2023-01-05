import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsFilterComponent } from './travels-filter.component';

describe('TravelsFilterComponent', () => {
  let component: TravelsFilterComponent;
  let fixture: ComponentFixture<TravelsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
