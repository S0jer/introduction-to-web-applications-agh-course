import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTravelsHistoryComponent } from './my-travels-history.component';

describe('MyTravelsHistoryComponent', () => {
  let component: MyTravelsHistoryComponent;
  let fixture: ComponentFixture<MyTravelsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTravelsHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTravelsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
