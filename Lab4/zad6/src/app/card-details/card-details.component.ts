import { Component, OnInit, Input } from '@angular/core';
import { ACard } from '../card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() card?: ACard;

  constructor() { }

  ngOnInit(): void {
  }
}
