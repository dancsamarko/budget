import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  items: Item[];
  amount: number = 0; 

  ngOnInit(): void {
    this.getItems();
  }

  getItems():void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  add(title: string, amount: number): void {
    title = title.trim();
    if (!title) { return; }
    this.itemService.addItem({title, amount} as Item)
      .subscribe(item => {
        this.items.push(item);
        this.updateAmount();
      })
  }

  delete(item: Item): void {
      this.items = this.items.filter(i => i !== item);
      this.itemService.deleteItem(item).subscribe();
      this.updateAmount()
  }


  updateAmount() {
    this.amount = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.amount = +this.amount + +this.items[i].amount;
    }
  }

}
