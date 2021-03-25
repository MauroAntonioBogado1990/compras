import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'remera',
        price: 700,
        quantity: 2,
        completed: false
      },
      {
        id: 1,
        title: 'pantalon',
        price: 500,
        quantity: 1,
        completed: true
      }
    ]
  }

}
