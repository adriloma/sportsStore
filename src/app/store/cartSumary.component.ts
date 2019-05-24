import { Component } from '@angular/core';
import { Cart } from './../model/cart.model';

@Component({
    selector: 'cart',
    templateUrl: 'cartSumary.template.html'
})
export class CartSumaryComponent {
    constructor(public cart: Cart) {}
}
