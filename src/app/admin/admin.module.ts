import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { AuthGuard } from './auth.guard';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent},
    { path: 'main', component: AdminComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'auth' }
])

@NgModule({
    declarations: [
        AuthComponent,
        AdminComponent
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