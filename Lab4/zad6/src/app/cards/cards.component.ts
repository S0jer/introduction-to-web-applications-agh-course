import { Component, OnInit } from '@angular/core';
import { ACard } from '../card';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = CARDS;
  selectedCard?: ACard;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(card: ACard): void {
    this.selectedCard = card;
  }
}
