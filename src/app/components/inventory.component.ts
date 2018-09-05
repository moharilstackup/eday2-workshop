import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LineItem } from '../interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Output()
  itemSelected = new EventEmitter<LineItem>();

  constructor() { }

  ngOnInit() {
  }

  //Hardcoded - inventory list
  inventory: LineItem[] = [
    { label: "Acorn squash", image: "acorn_squash.png", quantity: 10 },
    { label: "Apple", image: "apple.png", quantity: 10 },
    { label: "Bell Pepper", image: "bell_pepper.png", quantity: 10 },
    { label: "Blueberries", image: "blueberries.png", quantity: 10 },
    { label: "Brocolli", image: "broccoli.png", quantity: 10 },
    { label: "Carrot", image: "carrot.png", quantity: 10 },
    { label: "Celery", image: "celery.png", quantity: 10 },
    { label: "Chili Pepper", image: "chili_pepper.png", quantity: 10 },
    { label: "Corn", image: "corn.png", quantity: 10 },
    { label: "Egg Plant", image: "eggplant.png", quantity: 10 },
    { label: "Harold", image: "harold.png", quantity: 10 },
    { label: "Lettuce", image: "lettuce.png", quantity: 10 },
    { label: "Mushroom", image: "mushroom.png", quantity: 10 },
    { label: "Onion", image: "onion.png", quantity: 10 },
    { label: "Potato", image: "potato.png", quantity: 10 },
    { label: "Pumpkin", image: "pumpkin.png", quantity: 10 },
    { label: "Radish", image: "radish.png", quantity: 10 },
    { label: "Squash", image: "squash.png", quantity: 10 },
    { label: "Strawberry", image: "strawberry.png", quantity: 10 },
    { label: "Sugar Snap", image: "sugar_snap.png", quantity: 10 },
    { label: "Tomato", image: "tomato.png", quantity: 10 },
    { label: "Zucchini", image: "zucchini.png", quantity: 10 },
  ];


  addItem(n: LineItem) {
    console.log("addItem() : ",n.label);
    this.itemSelected.next(n);
  }
}
