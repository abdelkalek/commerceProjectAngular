import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private Cartservice: CartService, private formBuilder: FormBuilder) {
    this.items = this.Cartservice.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.Cartservice.getItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.Cartservice.clearCart();
    this.checkoutForm.reset();
  }

}
