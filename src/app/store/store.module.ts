import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from './../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective} from './counter.directive';
import { CartSumaryComponent } from './cartSumary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [
        StoreComponent,
        CounterDirective,
        CartSumaryComponent,
        CartDetailComponent,
        CheckoutComponent,
        CartDetailComponent,
        CheckoutComponent],
    exports: []
})
export class StoreModule {}
