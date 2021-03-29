import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  title:string='';
  price:number=0;
  quantity:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
