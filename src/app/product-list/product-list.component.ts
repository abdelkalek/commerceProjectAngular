import {Component, OnInit} from '@angular/core';
import {products} from '../Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = products;

  constructor() {
  }

  ngOnInit(): void {
  }

  share(): void {
    window.alert('the Product has been shared!');
  }

  notificationparent(): void {
    window.alert('Notification from Child');

  }
}
