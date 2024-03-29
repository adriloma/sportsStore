import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
    lines: CartLine[] = [];
    itemCount: number = 0;
    cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        const line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        const line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity = Number(quantity);
            if (line.quantity === 0) {
                this.removeLine(product.id);
                return;
            }
        }
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id === id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.cartPrice += line.product.price * line.quantity;
        });
    }
}

export class CartLine {
    constructor(public product: Product, public quantity: number) {}

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}