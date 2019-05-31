import { Component } from "@angular/core";
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
    templateUrl: './orderTable.component.html'
})
export class OrderTableComponent {
    includeShipped = false;
    constructor(private repository: OrderRepository) {}

    getOrders(): Order[] {
        return this.repository.getOrders()
            .filter(order => this.includeShipped || order.shipped === false);
    }

    markShipped(order: Order): void {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    delete(id: number): void {
        this.repository.deleteOrder(id);
    }
}