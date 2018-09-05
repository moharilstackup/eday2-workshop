import { Component } from '@angular/core';
import { LineItem } from './interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eday2-workshop';
  myCart: LineItem[] = [];

  // newItem =""
  newItem(item: LineItem) {
    console.log('>>>>> new item: ', item);

    if (this.myCart.length != 0) {
      for (let i of this.myCart) {
        if (item.label == i.label) {
          console.log("Found item, Not adding : ", item.label); //, this.shoppingList[i]);
          return;
        }
      }
    }
    this.myCart.push(item);
  }
}
