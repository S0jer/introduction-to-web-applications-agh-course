import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsBasketComponent } from './travels-basket.component';

describe('TravelsBasketComponent', () => {
  let component: TravelsBasketComponent;
  let fixture: ComponentFixture<TravelsBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelsBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
