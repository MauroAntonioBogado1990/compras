import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0;

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
    ];
    this.getTotal();
  }
  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
    }
    toggleItem(item:Item){
      this.getTotal();

    }
   getTotal(){
     this.total = this.items
                 .filter(item => !item.completed)
                 .map(item => item.quantity * item.price)
                 .reduce((acc,item)=> acc += item,0);
  }

}
