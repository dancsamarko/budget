import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const items = [
        {id: 0, title: "Pénz", amount:500}
    ]
    return {items};
  }

  constructor() { }
}
