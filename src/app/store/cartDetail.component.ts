import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    templateUrl: 'cartDetail.template.html'
})
export class CartDetailComponent {
    constructor(public cart: Cart) {}
}
