import { Component, OnInit } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
    templateUrl: './productTable.component.html'
})
export class productTableComponent {
    constructor(private productRepository: ProductRepository) {}

    getProducts(): Product[] {
        return this.productRepository.getProducts();
    }

    deleteProduct(id: number) {
        this.productRepository.deleteProduct(id);
    }
}