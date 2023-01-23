import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from './../travel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TravelData } from '../mock-data/travelData';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-travel-form',
  templateUrl: './edit-travel-form.component.html',
  styleUrls: ['./edit-travel-form.component.css']
})
export class EditTravelFormComponent implements OnInit {

  private subscription: Subscription | undefined;
  collapseMenu: boolean = false;
  travelName: string = "";
  travelData: TravelData;

  modelForm: FormGroup;
  constructor(private route: ActivatedRoute, private travelService: TravelService, private formBuilder : FormBuilder, private storage: StorageService) {
    
    this.subscription = this.route.params.subscribe(params => {
      this.travelName = params['name'];
    })
    this.travelData = this.travelService.getTravel(this.travelName);
    this.modelForm = this.formBuilder.group({
    name: [this.travelData.name, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    country: [this.travelData.country, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    city: [this.travelData.city, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    startDate:  this.travelData.startDate,
    endDate:  this.travelData.endDate,
    unitPrice:  [this.travelData.unitPrice, [Validators.required, Validators.pattern('^[0-9 ]+$')]],
    peopleLimit: [this.travelData.peopleLimit, [Validators.required, Validators.pattern('^[0-9 ]+$')]],
    description:  [this.travelData.description, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    counter: 0,
    imgPath: this.travelData.imgPath
    });
  }
  send() {
    console.log(this.modelForm);
    let newTravel : TravelData = new TravelData(
    this.modelForm.value.name,
    this.modelForm.value.country,
    this.modelForm.value.city,
    this.modelForm.value.startDate,
    this.modelForm.value.endDate,
    this.modelForm.value.unitPrice,
    this.modelForm.value.peopleLimit,
    this.modelForm.value.description,
    this.modelForm.value.imgPath
    )
    this.edit(newTravel);
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

  edit(newTravel: TravelData){
    const travel = {
      name:newTravel.name,
      country:newTravel.country,
      city:newTravel.city,
      startDate: newTravel.startDate,
      endDate: newTravel.endDate,
      unitPrice: newTravel.unitPrice,
      peopleLimit: newTravel.peopleLimit,
      description: newTravel.description,
      imgPath: newTravel.imgPath,
      ratings: newTravel.ratings,
      reservationsCnt: newTravel.reservationsCnt,
    }
    this.travelService.edit(this.travelData.id!, travel);
    alert('Saved');
  }
}
