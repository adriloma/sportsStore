import { Component } from '@angular/core';
import { Cart } from './../model/cart.model';
import { Router } from '@angular/router';
@Component({
    selector: 'cart',
    templateUrl: 'cartSumary.template.html'
})
export class CartSumaryComponent {
    constructor(public cart: Cart, public router: Router) {}
}
