import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelsMenuComponent } from './edit-travels-menu.component';

describe('EditTravelsMenuComponent', () => {
  let component: EditTravelsMenuComponent;
  let fixture: ComponentFixture<EditTravelsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTravelsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
