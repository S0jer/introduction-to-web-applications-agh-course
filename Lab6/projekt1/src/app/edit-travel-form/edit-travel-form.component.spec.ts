import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelFormComponent } from './edit-travel-form.component';

describe('EditTravelFormComponent', () => {
  let component: EditTravelFormComponent;
  let fixture: ComponentFixture<EditTravelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTravelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
