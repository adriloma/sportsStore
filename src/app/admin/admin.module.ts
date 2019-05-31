import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { AuthGuard } from './auth.guard';
import { productTableComponent } from './productTable.component';
import { productEditorComponent } from './productEditor.component';
import { OrderTableComponent } from './orderTable.component';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent},
    { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    children: [
        {path: 'products', component: productTableComponent},
        { path: 'orders', component: OrderTableComponent },
        { path: 'products/:mode/:id', component: productEditorComponent },
        { path: 'products/:mode', component: productEditorComponent }
    ]},
    { path: '**', redirectTo: 'auth' }
])

@NgModule({
    declarations: [
        AuthComponent,
        AdminComponent,
        productTableComponent,
        productEditorComponent,
        OrderTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing,
        ModelModule
    ],
    providers: [AuthGuard]
})
export class AdminModule {}