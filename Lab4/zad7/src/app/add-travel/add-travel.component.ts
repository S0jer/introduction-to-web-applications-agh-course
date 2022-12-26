import { TravelService } from './../travel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TravelData } from '../mock-data/travelData';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  collapseMenu: boolean = false;

  modelForm: FormGroup;
  constructor(private travelService: TravelService, private formBuilder : FormBuilder) {
    this.modelForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    country: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    city: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    startDate:  ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    endDate:  [[''], [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    unitPrice:  ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    peopleLimit: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    description:  ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    counter: 0
    });
  }
  send(){
    let newTravel : TravelData = new TravelData(
    this.modelForm.value.name,
    this.modelForm.value.country,
    this.modelForm.value.city,
    this.modelForm.value.startDate,
    this.modelForm.value.endDate,
    this.modelForm.value.unitPrice,
    this.modelForm.value.peopleLimit,
    this.modelForm.value.description,
    this.modelForm.value.imgPath = "../../assets/img/cities/default.jpg"
    )
    this.put(newTravel);
    this.modelForm.reset();
  }

  ngOnInit(): void {
  }


  get name(){
    return this.modelForm.get('name');
  }

  get country(){
    return this.modelForm.get('country');
  }

  get city(){
    return this.modelForm.get('city');
  }

  get startDate(){
    return this.modelForm.get('startDate');
  }

  get endDate(){
    return this.modelForm.get('endDate');
  }

  get unitPrice(){
    return this.modelForm.get('unitPrice');
  }

  get peopleLimit(){
    return this.modelForm.get('peopleLimit');
  }

  get description(){
    return this.modelForm.get('description');
  }

  get imgPath(){
    return this.modelForm.get('imgPath');
  }

  put(newTravel: TravelData){
    this.travelService.push(newTravel);
  }

}
