import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
