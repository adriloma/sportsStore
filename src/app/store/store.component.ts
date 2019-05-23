import { Component } from '@angular/core';
import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html'
})
export class StoreComponent {
    products: Product[];
    categories: string[];
    selectedCategory: string = null;
    productsPerPage = 4;
    selectedPage = 1;
    pageNumbers: number[];

    constructor(private repository: ProductRepository) {
        this.products = this.getProducts();
        this.categories = this.getCategories();
        this.pageNumbers = this.getpageNumbers();
    }

    getProducts(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    getCategories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory: string = null): void {
        this.selectedCategory = newCategory;
        this.products = this.getProducts();
        this.pageNumbers = this.getpageNumbers();
        this.changePage(1);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
        this.products = this.getProducts();
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.pageNumbers = this.getpageNumbers();
        this.changePage(1);
    }

    getpageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((x, i) => i + 1);
    }

}
