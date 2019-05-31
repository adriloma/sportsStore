import { Component } from "@angular/core";
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './productEditor.component.html'
})
export class productEditorComponent {
    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository,
                private router: Router,
                private activeRoute: ActivatedRoute) {
                    this.editing = this.activeRoute.snapshot.params.mode === 'edit';
                    if (this.editing) {
                        debugger;
                        Object.assign(this.product, repository.getProduct(Number(this.activeRoute.snapshot.params.id)));
                        debugger;
                    }
                }
    save(form: NgForm) {
        if (form.valid) {
            this.repository.saveProduct(this.product);
            this.router.navigateByUrl('/admin/main/products');
        }
    }
}