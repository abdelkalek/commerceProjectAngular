import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TopbarComponent} from './topbar/topbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ProductAlertComponent} from './product-alert/product-alert.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {ShippingComponent} from './shipping/shipping.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopbarComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
