import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //items = ITEMS;
  private itemsUrl = 'api/items';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions);
  }

  deleteItem(item: Item): Observable<Item> {
    const id = item.id
    const url = '${this.itemsUrl}/${id}';

    return this.http.delete<Item>(url, this.httpOptions);
  }

}
