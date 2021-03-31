import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0;

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
    // this.items = [];
    //this.items = this.ItemService.getItems();
    this.ItemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal();
    })
    
  }
  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id !== item.id);
    this.ItemService.deleteItem(item).subscribe();
    this.getTotal();
    } 
    toggleItem(item:Item){
      this.ItemService.toggleItem(item).subscribe();
      this.getTotal();

    }
   getTotal(){
     this.total = this.items
                 .filter(item => !item.completed)
                 .map(item => item.quantity * item.price)
                 .reduce((acc,item)=> acc += item,0);
  }

}
